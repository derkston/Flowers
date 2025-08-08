import type { JSX } from 'react'

export interface IURL {
	path: string;
  component: () => JSX.Element;
  element_name: string;
}