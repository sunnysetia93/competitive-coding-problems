using System.Collections.Generic;
using System.Linq;
using System;
using System.Text;
using Common;

namespace FourSumII
{
    public class Solution
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();

        public int FourSumCount(int[] A, int[] B, int[] C, int[] D)
        {
            int n = A.Length;
            int res = 0;
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                {
                    int sum = A[i] + B[j];
                    if (!dict.ContainsKey(sum))
                        dict.Add(sum, 1);
                    else
                        dict[sum]++;
                }

            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                {
                    int lookFor = -1 * (C[i] + D[j]);
                    if (dict.ContainsKey(lookFor))
                        res += dict[lookFor];
                }
            return res;
        }
    }
}