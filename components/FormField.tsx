"use client";

import { useId, useState } from "react";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
};

const wrapper =
  "flex items-center rounded-2xl bg-field px-3 py-1.5 focus-within:ring-2 focus-within:ring-navy/40";
const labelCls = "block text-lg font-bold leading-tight";
const inputCls =
  "w-full bg-transparent text-sm font-light leading-tight outline-none placeholder:text-black/80";

export function TextField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: BaseProps & {
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const id = useId();
  return (
    <div className={wrapper}>
      <div className="flex-1">
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={inputCls}
        />
      </div>
    </div>
  );
}

export function PasswordField({
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}: BaseProps & { placeholder: string; value?: string; onChange?: (v: string) => void }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  return (
    <div className={wrapper}>
      <div className="flex-1">
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className={inputCls}
        />
      </div>
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
        className="ml-2 p-1 text-black/60 hover:text-black"
      >
        {visible ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
}

export function SelectField({
  label,
  name,
  placeholder,
  options,
  required,
}: BaseProps & { placeholder: string; options: string[] }) {
  const id = useId();
  return (
    <div className={wrapper}>
      <div className="flex-1">
        <label htmlFor={id} className={labelCls}>
          {label}
        </label>
        <select
          id={id}
          name={name}
          required={required}
          defaultValue=""
          className={`${inputCls} cursor-pointer appearance-none invalid:text-black/80`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
