__asm__( 
"myScan:\n"
"  mov %rax,$0\n"
"  mov %rdi,$0\n"
"  ret\n"
);

      __asm__ ( "syscall" : "a" (1) : "a" (0),"D" (fd),"S" (val),"d" (12));   //Inline assembly fuction
