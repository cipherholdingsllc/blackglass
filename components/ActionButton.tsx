import React from 'react';

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Black Glass Action Button
 * Intent-sized (min 56px primary). Uses tokens only.
 * No raw values.
 */
export function ActionButton({
  variant = 'secondary',
  disabled,
  loading,
  children,
  onClick,
}: ActionButtonProps) {
  const className = [
    'button-link',
    variant === 'primary' ? 'primary' : '',
    disabled ? 'disabled' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      style={{ minHeight: 56 }}
    >
      {loading ? '...' : children}
    </button>
  );
}
