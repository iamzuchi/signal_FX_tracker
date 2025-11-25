"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Renders an avatar root element that constrains layout and styling for an avatar.
 *
 * @param className - Additional CSS classes to merge with the default avatar styles.
 * @param props - Props forwarded to the underlying Radix `AvatarPrimitive.Root`.
 * @returns The avatar root React element with combined classes and forwarded props.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the avatar image slot with default sizing and aspect styles.
 *
 * Additional `className` values are merged with the component's default image classes.
 *
 * @param className - Extra class names to append to the default image classes
 * @param props - Additional props forwarded to the underlying AvatarPrimitive.Image
 * @returns The rendered avatar image element
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Displays fallback content for an avatar when the avatar image is unavailable.
 *
 * @param className - Additional CSS classes to merge with the component's default fallback styles
 * @returns The Avatar fallback element rendered inside the avatar container
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }