/**
 * LottieAnimation
 *
 * Eagerly loaded with bundled JSON — renders on first paint, no network request.
 *
 */
import Lottie from 'lottie-react';
import animationData from '@/assets/animations/homepagelottie.json';

interface LottieAnimationProps {
  className?: string;
}

export default function LottieAnimation({ className = '' }: LottieAnimationProps) {
  return (
    <Lottie animationData={animationData} loop autoplay className={className} aria-hidden="true" />
  );
}
