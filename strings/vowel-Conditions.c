/*
High vowel words are those words in which number of vowels is greater than or equal to number of consonants in the given word and at least 2 vowels appear together. Write a function to find whether the given word is a high vowel word or not.

Example:
Input = "you", Output = true (because 2>=1 and o and u appears together)
Input = "mine", Output = false (though 2>=2, but no 2 vowels appears together)
Input = "tongue", Output = true (because 3>=3 and u and e appears together)
Input = "national", Output = true (because 4>=4 and i and o appears together)
Input = "computer", Output = false (because 3<5)

By : Sunny Setia

*/
#include <stdio.h>
#include<string.h>


int IsHighVowelWord(char word[]);
int isVowel(char c);

int main()
{
    char word[50];
    scanf("%s",word);

    int res = IsHighVowelWord(word);
    
    if(res==1)
    {
        printf("true");
    }
    else
    {
        printf("false");
    }
    
	return 0;
}

int isVowel(char c)
{
     if(c=='a' || c=='A' || c=='e' || c=='E' || c=='o' || c=='O' || c=='u' || c=='U' || c=='i' || c=='I')
        {
            return 1;
        }
        return 0;
}

int IsHighVowelWord(char word[])
{
        
    int cons=0,vow=0,flag=0;
    
    int i;
    
    for(i=0;i<strlen(word);i++)
    {
        if(isVowel(word[i]))
        {    vow++;
            
            if(isVowel(word[i+1]) && i<strlen(word)-1)
            {
                flag=1;
            }
            
        }
        else
        {
            cons++;
        }
    }
    
    if(vow>=cons && flag==1)
    {
        return 1;
    }
    
    return 0;
    
}