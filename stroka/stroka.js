        str1 = "({})[]"

        function changeStr(str) {
            let strc = []
            for (i = 0; i < 6; i++) {
                if (str[i] == '(') { strc[i] = 1 }
                if (str[i] == '{') { strc[i] = 2 }
                if (str[i] == '[') { strc[i] = 3 }
                if (str[i] == ')') { strc[i] = -1 }
                if (str[i] == '}') { strc[i] = -2 }
                if (str[i] == ']') { strc[i] = -3 }
            }
            return strc;
        }
        str2 = changeStr(str1)

        console.log(str2)


        function checkStr(str) {
            l = 0
            j = 1
            while ((str[0] + str[j] != 0) & (j < 6)) {
                j = j + 2
            }
            if ((str[0] > str[j]) & (str[0] + str[j] == 0)) {
                l = l + 1
            }
            if (j != 5) {
                for (i = 1; i < 6; i++) {
                    j = 1
                    if ((str[i] > str[i + 1]) & (str[i] + str[i + 1] == 0)) {
                        l = l + 1



                    }
                }
            } else {
                if ((str[1] > str[4]) & (str[1] + str[4] == 0)) {
                    l = l + 1
                }
                if ((str[2] > str[3]) & (str[2] + str[3] == 0)) {
                    l = l + 1
                }
                if ((str[1] > str[2]) & (str[1] + str[2] == 0)) {
                    l = l + 1
                }
                if ((str[3] > str[4]) & (str[3] + str[4] == 0)) {
                    l = l + 1
                }
            }

            if (l == 3) { return true } else { return false, l }

        }

        console.log(checkStr(str2))