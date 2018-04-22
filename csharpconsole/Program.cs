using System;
using System.Text; // used for the StringBuilder
using System.Linq;
using System.Collections.Generic;

namespace csharpconsole
{
    // To create new console app use: dotnet new console 
    // Then: dotnet run
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($@"            Hi there welcome to HangMan! 
            The game you don't want to win?
            What's your name?");
            string user = Console.ReadLine();
            Console.WriteLine($@"            Nice to meet you {user}!
            The rules of the game are:
            1. You'll be shown a word with every letter blanked out. Your aim is guess each letter in the word.
            2. The catch is you'll only be able to make 8 wrong guesses before it's game over for hangman...
            Good luck! ");

            // Globals
            // int wrongGuess = 0;
            string[] hangWord = "dodecahedron".ToCharArray().Select(c => c.ToString()).ToArray();
            Console.WriteLine($@"This is hangWord.Length: {hangWord.Length}");
            // string[] xArr = [];
            var xArr = new List<string>();

            for (int i = 0; i < hangWord.Length; i++)
            {
                xArr.Add("_");
            };

            xArr.ForEach(Console.WriteLine);

        }
    }
}
