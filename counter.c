__asm__( 
"myCounter:\n"
"  mov %rdi,%rax\n"
"  add $1,%rax\n"
"  ret\n"
);

int main() {
  char *buffer = "OS PROJECT\n";
  long size = 11;                                                                  //Length of the string
  long fd = 1;                                                                     //File descriptor in which data is written
  long syscall = 1;                                                                 //For logging in console
  long ret = 1; 
                                                        
  int c=0;
  char val[11]="COUNTER=";
  char q;
  while (c<9)
  {
    c=myCounter(c);
    q='0'+c;
    val[9]='0'+c;
    __asm__ ( "syscall" : "=a" (ret) : "a" (syscall),"D" (fd),"S" (val),"d" (12));   //Inline assembly fuction
 
  }
  char *done="\nCounting finished\n";
  __asm__ ( "syscall" : "=a" (ret) : "a" (syscall),"D" (fd),"S" (done),"d" (20));   //Inline assembly fuction

  
  
  return 0;
}