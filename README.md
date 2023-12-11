# Vue test utils type issue

## Repo structure

This repo has two packages:
- `library-1`, which is a `library` which bundle a component that use vue generic
- `library-2`, which use `library-1` and run unit test using component of `library-1` with `findAllComponents` 

## How to reproduce?

- Run `pnpm build:1` to build `library-1`
- Run `pnpm build:2` to build `library-2`

The second command should generate `No overload matches this call.` TS error.

You can also see the error directly in `spec.ts` file in `library-2` folder with IntelliSense.

## Results

- NoUseGeneric.spec.ts is OK
- UseGeneric.spec.ts is KO
