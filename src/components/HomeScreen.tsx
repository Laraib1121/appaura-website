import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ScrollView } from "@nativescript/core";

export function HomeScreen() {
  return (
    <scrollView className="bg-white">
      {/* Hero Section */}
      <flexboxLayout className="p-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <stackLayout className="text-center p-6">
          <label className="text-4xl font-bold text-white mb-4">
            Transform Your Shopify Store Into a Native Mobile App
          </label>
          <label className="text-xl text-white mb-6">
            Launch your mobile commerce experience in weeks, not months
          </label>
          <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full">
            Get Started
          </button>
        </stackLayout>
      </flexboxLayout>

      {/* Features Section */}
      <gridLayout rows="auto, auto, auto" columns="*, *, *" className="p-8 gap-6">
        <stackLayout row="0" col="0" className="text-center p-4">
          <label className="text-2xl font-bold mb-2">Quick Launch</label>
          <label className="text-gray-600">
            Go live with your mobile app in weeks
          </label>
        </stackLayout>
        <stackLayout row="0" col="1" className="text-center p-4">
          <label className="text-2xl font-bold mb-2">Best Practices</label>
          <label className="text-gray-600">
            Built with established mobile patterns
          </label>
        </stackLayout>
        <stackLayout row="0" col="2" className="text-center p-4">
          <label className="text-2xl font-bold mb-2">Full Control</label>
          <label className="text-gray-600">
            Custom features without the hassle
          </label>
        </stackLayout>
      </gridLayout>

      {/* Pricing Section */}
      <stackLayout className="p-8 bg-gray-50">
        <label className="text-3xl font-bold text-center mb-8">
          Choose Your Package
        </label>
        
        <gridLayout rows="auto, auto, auto" columns="*, *, *" className="gap-6">
          {/* Starter Package */}
          <stackLayout row="0" col="0" className="bg-white p-6 rounded-lg shadow-md">
            <label className="text-2xl font-bold mb-2">Starter</label>
            <label className="text-xl text-blue-600 mb-4">From $199/mo</label>
            <label className="mb-2">• Basic app conversion</label>
            <label className="mb-2">• Standard features</label>
            <label className="mb-2">• Email support</label>
            <button className="bg-blue-600 text-white py-3 rounded-full mt-4">
              Get Started
            </button>
          </stackLayout>

          {/* Pro Package */}
          <stackLayout row="0" col="1" className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
            <label className="text-2xl font-bold mb-2">Professional</label>
            <label className="text-xl mb-4">From $399/mo</label>
            <label className="mb-2">• Advanced features</label>
            <label className="mb-2">• Priority support</label>
            <label className="mb-2">• Custom branding</label>
            <button className="bg-white text-blue-600 py-3 rounded-full mt-4">
              Get Started
            </button>
          </stackLayout>

          {/* Enterprise Package */}
          <stackLayout row="0" col="2" className="bg-white p-6 rounded-lg shadow-md">
            <label className="text-2xl font-bold mb-2">Enterprise</label>
            <label className="text-xl text-blue-600 mb-4">Custom Pricing</label>
            <label className="mb-2">• Full customization</label>
            <label className="mb-2">• Dedicated support</label>
            <label className="mb-2">• Advanced analytics</label>
            <button className="bg-blue-600 text-white py-3 rounded-full mt-4">
              Contact Us
            </button>
          </stackLayout>
        </gridLayout>
      </stackLayout>

      {/* Why Choose Us */}
      <stackLayout className="p-8">
        <label className="text-3xl font-bold text-center mb-8">
          Why Choose Appora?
        </label>
        <gridLayout rows="auto, auto" columns="*, *" className="gap-6">
          <stackLayout row="0" col="0" className="p-4">
            <label className="text-xl font-bold mb-2">Lifetime Warranty</label>
            <label className="text-gray-600">
              Rest easy with our comprehensive lifetime warranty coverage
            </label>
          </stackLayout>
          <stackLayout row="0" col="1" className="p-4">
            <label className="text-xl font-bold mb-2">Unlimited Revisions</label>
            <label className="text-gray-600">
              We'll keep refining until your app is perfect
            </label>
          </stackLayout>
          <stackLayout row="1" col="0" className="p-4">
            <label className="text-xl font-bold mb-2">React Native Power</label>
            <label className="text-gray-600">
              Built on React Native for optimal performance
            </label>
          </stackLayout>
          <stackLayout row="1" col="1" className="p-4">
            <label className="text-xl font-bold mb-2">Platform Parity</label>
            <label className="text-gray-600">
              Consistent experience across iOS and Android
            </label>
          </stackLayout>
        </gridLayout>
      </stackLayout>

      {/* CTA Section */}
      <stackLayout className="p-8 bg-blue-600">
        <label className="text-3xl font-bold text-white text-center mb-4">
          Ready to Transform Your Store?
        </label>
        <label className="text-xl text-white text-center mb-6">
          Join thousands of merchants who've grown their business with Appora
        </label>
        <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full self-center">
          Schedule a Demo
        </button>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({});