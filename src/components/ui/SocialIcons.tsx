import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

interface IconProps {
  size?: number;
  className?: string;
}

export function GithubIcon({ size = 18, className = '' }: IconProps) {
  return <FiGithub size={size} className={className} aria-hidden="true" />;
}

export function LinkedinIcon({ size = 18, className = '' }: IconProps) {
  return <FiLinkedin size={size} className={className} aria-hidden="true" />;
}

export function MailIcon({ size = 18, className = '' }: IconProps) {
  return <FiMail size={size} className={className} aria-hidden="true" />;
}

export function GmailIcon({ size = 18, className = '' }: IconProps) {
  return <SiGmail size={size} className={className} aria-hidden="true" />;
}
