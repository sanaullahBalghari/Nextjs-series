'use client';

import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2, Send, Sparkles, MessageCircle, ShieldCheck, User, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import * as z from 'zod';
import { ApiResponse } from '@/types/ApiResponse';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { messageSchema } from '@/schemas/messageSchema';

const initialMessageString =
  "What's your favorite movie?||Do you have any pets?||What's your dream job?";

export default function SendMessage() {
  const params = useParams<{ username: string }>();
  const username = params.username;

  // ✅ State for suggestions
  const [suggestions, setSuggestions] = useState<string[]>(
    initialMessageString.split('||')
  );
  const [isSuggestLoading, setIsSuggestLoading] = useState(false);

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const messageContent = form.watch('content');

  const handleMessageClick = (message: string) => {
    form.setValue('content', message);
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>('/api/send-message', {
        ...data,
        username,
      });

      toast({
        title: response.data.message,
        variant: 'default',
      });
      form.reset({ ...form.getValues(), content: '' });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: 'Error',
        description:
          axiosError.response?.data.message ?? 'Failed to sent message',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Updated fetch function to call our API
  const fetchSuggestedMessages = async () => {
    setIsSuggestLoading(true);
    try {
      const response = await fetch('/api/suggest-messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success && data.suggestions) {
        setSuggestions(data.suggestions);
        toast({
          title: '✨ New suggestions generated!',
          description: 'Click any suggestion to use it',
        });
      } else {
        throw new Error(data.error || 'Failed to generate suggestions');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate suggestions. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSuggestLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-pink-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <User className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Send Anonymous Message
          </h1>
          <p className="text-lg md:text-xl text-purple-100 mb-2">
            to <span className="font-semibold text-white">@{username}</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Your identity will remain completely anonymous</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Main Message Form Card */}
        <Card className="bg-white shadow-xl border-2 border-purple-100">
          <CardHeader className="space-y-1 pb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-purple-600" />
              Your Message
            </h2>
            <p className="text-gray-500">
              Write your honest thoughts, feedback, or questions
            </p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-gray-700">
                        Message Content
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your anonymous message here... Be kind and respectful!"
                          className="resize-none min-h-[150px] text-base border-2 border-gray-200 focus:border-purple-400 transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-xs text-gray-500 mt-2">
                        💡 Your message will be sent anonymously. Please be respectful and considerate.
                      </p>
                    </FormItem>
                  )}
                />
                <div className="flex justify-center pt-2">
                  {isLoading ? (
                    <Button 
                      disabled 
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg"
                    >
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={isLoading || !messageContent}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Anonymous Message
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* AI Suggestions Card */}
        <Card className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  AI Message Suggestions
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Not sure what to write? Try one of these AI-generated prompts
                </p>
              </div>
              <Button
                onClick={fetchSuggestedMessages}
                disabled={isSuggestLoading}
                variant="outline"
                className="border-2 border-purple-300 hover:bg-purple-100 text-purple-700 font-semibold"
              >
                {isSuggestLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get New Suggestions
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestions.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 px-4 text-left justify-start hover:bg-purple-100 hover:border-purple-400 transition-all border-2 border-gray-200"
                  onClick={() => handleMessageClick(message)}
                >
                  <div className="flex items-start gap-3 w-full">
                    <MessageCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{message}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-gradient-to-r from-gray-900 to-pink-600 text-white border-0 shadow-xl">
          <CardContent className="py-8 px-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Want Your Own Message Board?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Create your account and start receiving anonymous messages from your friends, followers, and audience!
            </p>
            <Link href="/sign-up">
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Create Your Free Account
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 pt-4">
          <Card className="bg-white border-purple-200">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">100% Anonymous</h4>
              <p className="text-sm text-gray-600">
                Your identity is never revealed to the recipient
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-pink-200">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mb-3">
                <MessageCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Instant Delivery</h4>
              <p className="text-sm text-gray-600">
                Your message is delivered immediately to the user
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-indigo-200">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-3">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">AI Powered</h4>
              <p className="text-sm text-gray-600">
                Get smart message suggestions when you need inspiration
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}