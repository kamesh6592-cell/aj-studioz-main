'use client'

import { SignInPage } from "@/components/sign-in";

const mockTestimonials = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    name: "Emma Wilson",
    handle: "@emmaw_startup", 
    text: "AJ STUDIOZ helped us scale our customer support effortlessly!"
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Park",
    handle: "@lisa_innovate",
    text: "The AI responses are so natural, our customers love it!"
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "David Kumar",
    handle: "@davidk_tech",
    text: "Best investment we made for our business automation."
  }
];

export default function SignUpPageRoute() {
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Sign up attempt:', { email, password });
    // Add your sign-up logic here
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up clicked');
    // Add your Google sign-up logic here
  };

  const handleSignIn = () => {
    window.location.href = '/signin';
  };

  return (
    <SignInPage
      title={<span className="font-light text-foreground tracking-tighter">Join <span className="font-bold text-primary">AJ STUDIOZ</span></span>}
      description="Create your account and start building intelligent chatbots today"
      heroImageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
      testimonials={mockTestimonials}
      onSignIn={handleSignUp}
      onGoogleSignIn={handleGoogleSignUp}
      onCreateAccount={handleSignIn}
    />
  );
}