import React from "react";
import { Cn } from "../lib/Helper";
import Link from "next/link";
import { cva, type VariantProps } from 'class-variance-authority';



const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-[#809d88]/70 bg-primary text-primary-foreground',
        destructive:
          'hover:bg-destructive/90 bg-destructive text-destructive-foreground',
        outline:
          'border border-input bg-accent hover:bg-accent hover:text-accent-foreground',
        secondary:
          'hover:bg-secondary/80 bg-secondary text-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-[12px]',
        lg: 'h-12 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  className?: string;
}



const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={Cn((buttonVariants({ variant, size, className })))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";


export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  link: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, link, ...props }, ref) => {
    return (
      <Link
        href={link}
        className={Cn(`${className}`)}
        ref={ref}
        {...props}
      />
    );
  }
);
LinkButton.displayName = "LinkButton";

export { Button, LinkButton };

// export const Spainner = ({ style }: { style?: string }) => {
//   return (
//     <div className="">
//       <FiLoader
//         className={cn(`animate-spin text-[20px] text-white ${style}`)}
//       />
//     </div>
//   );
// };
