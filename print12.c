int main() {
  char *buffer = "OS PROJECT\n";
  long size = 11;                                                                  //Length of the string
  long fd = 1;                                                                     //File descriptor in which data is written
  long syscall = 1;                                                                 //For logging in console
  long ret = 1; 
                                                               
  __asm__ ( "syscall" : "=a" (ret) : "a" (syscall),"D" (fd),"S" (buffer),"d" (size));   //Inline assembly fuction
    
  return 0;
}