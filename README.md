# Atomic UI

A set of reusable React components

## Setup

1. `cd src`
2. `git clone git@github.com:kaluabentes/atomic-ui.git components`

## Default variables

```CSS
:root {
  /* Typography */
  --font-face: "Roboto", sans-serif;

  /* Colors */
  --color-primary: #ea1c2b;
  --color-info: #276fbf;
  --color-error: #ea1c2b;
  --color-black: #333;
  --color-gray10: #aaa;
  --color-gray14: #e6e6e6;
  --color-gray6: #666;
  --color-white: #fff;

  /* Button component settings */
  --button-default-border-color: var(--color-primary);
  --button-default-text-color: var(--color-primary);
  --button-primary-border-color: var(--color-primary);
  --button-primary-text-color: var(--color-white);
  --button-primary-background-color: var(--color-primary);
  --button-primary-spinner-background-color: var(--color-primary);

  /* Icon component settings */
  --icon-text-color: var(--color-primary);

  /* Input component settings */
  --input-placeholder-text-color: var(--color-gray6);
  --input-border-color: var(--color-gray6);
  --input-text-color: var(--color-gray6);
  --input-focus-border-color: var(--color-info);
  --input-error-border-color: var(--color-error);
  --input-disabled-border-color: var(--color-gray10);
  --input-error-message-text-color: var(--color-error);

  /* Spinner component settings */
  --spinner-background-color: var(--color-gray14);
  --spinner-thincircle-border-color: var(--color-primary);
  --spinner-innercircle-background-color: var(--color-white);

  /* AppBar component settings */
  --appbar-background-color: var(--color-primary);
  --appbar-text-color: var(--color-white);

  /* IconButton component settings */
  --iconbutton-background-color: transparent;
  --iconbutton-hover-background-color: var(--color-gray14);
  --iconbutton-primary-background-color: var(--color-primary);
  --iconbutton-primary-text-color: var(--color-white);
  --iconbutton-primary-icon-text-color: var(--color-white);
}
```

## Icons

To load the icons on the project insert the following tag on head:

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
