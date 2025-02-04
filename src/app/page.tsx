"use client"

import React from "react";
import { useLanguageRedirect } from "@hooks/useLanguageRedirect";

/// For static builds, page redirection will not work through middleware.
/// In such cases, it's necessary to create a dedicated page for 
/// redirection and implement the redirection logic through a hook. 
/// If your build is not static, this page is not necessary.


export default function Page() {
  useLanguageRedirect()
  return (<React.Fragment />)
}

