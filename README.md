# Stencil-Jest bug

Reproduction for https://github.com/jest-community/vscode-jest/issues/1124
Caused by Stencil incorrectly parsing CLI arguments. See https://github.com/ionic-team/stencil/issues/5640

## Steps

Clone this repository

```bash
git clone https://github.com/maxpatiiuk/vscode-jest-bug-reproduction
```

Install dependencies

```bash
cd vscode-jest-bug-reproduction
yarn install
```

Open VS Code

```bash
code .
```

Try to run the test in [./src/tests/test.spec.ts](./src/tests/test.spec.ts)
using the icon in the gutter.

On 1st run it will work fine

On the 2nd run, it will be stuck forever

Restarting VS Code repeats this cycle - works on 1st run, stuck on 2nd

## Additional

See example vscode-jest output from the 1st run in the
[./jest.config.txt](./jest.config.txt)

Hope this is sufficient to reproduce the bug
