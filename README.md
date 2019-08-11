# barnard59-shell

Shell command support for Barnard59 Linked Data pipelines.
This package exports a operations that runs commands in a shell and handles `stdin` and `stdout` as duplex stream.
The operation accepts any number of arguments, where the first argument is the program that should be executed and the others are arguments that will be given to the program.
