import { SignInPage } from "@/components/sign-in";

const mockTestimonials = [
  {
    avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Johnson",
    handle: "@alexj_dev",
    text: "AJ STUDIOZ AI chatbot transformed our customer service completely!"
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b643?w=150&h=150&fit=crop&crop=face", 
    name: "Sarah Chen",
    handle: "@sarahc_tech",
    text: "The most intuitive AI platform I've ever used. Highly recommended!"
  },
  {
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Michael Ross", 
    handle: "@mikross_ai",
    text: "Incredible results with their AI technology. Game-changer for our business."
  }
];

export default function SignInPageRoute() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Sign in attempt:', { email, password });
    // Add your sign-in logic here
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign in clicked');
    // Add your Google sign-in logic here
  };

  const handleResetPassword = () => {
    console.log('Reset password clicked');
    // Add your reset password logic here
  };

  const handleCreateAccount = () => {
    window.location.href = '/signup';
  };

  return (
    <SignInPage
      title={<span className="font-light text-foreground tracking-tighter">Welcome to <span className="font-bold text-primary">AJ STUDIOZ</span></span>}
      description="Sign in to access your AI chatbot dashboard and manage your conversations"
      heroImageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
      testimonials={mockTestimonials}
      onSignIn={handleSignIn}
      onGoogleSignIn={handleGoogleSignIn}
      onResetPassword={handleResetPassword}
      onCreateAccount={handleCreateAccount}
    />
  );
}