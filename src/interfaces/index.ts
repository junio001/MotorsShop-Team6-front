import React, { ReactNode } from "react";

export interface Ichildren {
  children: ReactNode;
}

export interface Iprops extends Ichildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  [props: string]: any;
}
