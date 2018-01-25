using System;

namespace sudokuSolver
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());

            if(n==6 || n==9)    // for board of size 6 or 9
            {
                int[,] board = new int[n, n];

                setUpBoard(board, n);

                bool success = solveSudoku(board, 0, 0, n);
                if (success == true)
                    printBoard(board, n);

            }

            Console.ReadKey();
        }

        public static void setUpBoard(int[,] board, int n)
        {
            for(int i=0;i<n;i++)
            {
                string[] lineRead = Console.ReadLine().Split(' ');

                for(int j=0;j<n;j++)
                {
                    board[i, j] = Convert.ToInt32(lineRead[j]);
                }
            }
        }

        public static bool solveSudoku(int[,] board,int r,int c,int n)
        {
            if (r >= n)     // end of rows 
                return true;
            if (c >= n)
                return solveSudoku(board, r + 1, 0, n);

            if (board[r, c] != 0)
            {
                return solveSudoku(board, r, c + 1, n);
            }

            for (int curr = 1; curr <= n; curr++)
            {
                if(checkPlace(board,r,c,n,curr))
                {
                    board[r, c] = curr;
                    bool success = solveSudoku(board, r, c + 1, n); //check for next empty place
                    if (success)
                        return true;
                    board[r, c] = 0;    //restore
                }
            }

            return false;

        }

        public static bool checkPlace(int[,] board,int r, int c, int n,int curNum)
        {
            for(int i=0;i<n;i++)        // checking horizontally and vertically for curNum 
            {
                if (board[i, c] == curNum) return false;
                if(board[r,i] == curNum) return false;
            }

            int rootn = (int)Math.Sqrt(n);
            int gridR = r - r % rootn;
            int gridC = c - c % rootn;

            // checking in the same grid
            for (int i = gridR; i < gridR + rootn; i++)
                for (int j = gridC; j < gridC + rootn; j++)
                    if (board[i, j] == curNum)
                        return false;

            return true;

        }

        public static void printBoard(int[,] board,int n)
        {
            for(int i=0;i<n;i++)
            {
                for(int j=0;j<n;j++)
                {
                    Console.Write(board[i,j] + " " );
                }
                Console.WriteLine();
            }
        }
    }
}
