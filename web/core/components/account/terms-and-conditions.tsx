import React, { FC } from "react";
import Link from "next/link";

type Props = {
  isSignUp?: boolean;
};

export const TermsAndConditions: FC<Props> = (props) => {
  const { isSignUp = false } = props;
  return (
    <span className="flex items-center justify-center py-6">
      <p className="text-center text-sm text-onboarding-text-200 whitespace-pre-line">
        {isSignUp ? "Creando un account" : "Accedendo"}, accetti i nostri{" \n"}
        <Link href="" target="_blank" rel="noopener noreferrer">
          <span className="text-sm font-medium underline hover:cursor-pointer">Termini di Servizio</span>
        </Link>{" "}
        e la nostra{" "}
        <Link href="" target="_blank" rel="noopener noreferrer">
          <span className="text-sm font-medium underline hover:cursor-pointer">Informativa sulla Privacy</span>
        </Link>
        {"."}
      </p>
    </span>
  );
};
