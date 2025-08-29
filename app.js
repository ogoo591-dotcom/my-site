// 0. Jishee bodlohuud
// let a = 1278;
// let b = a % 10;
// let c = a - b;
// let d = c % 100;
// let e = d / 10;
// console.log(e);

// 1. Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.

// let number = 25;
// if (number % 5 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2. Өгөгдсөн үсгийг шалгаад эгшиг бол "vowel" , гийгүүлэгч бол "consonant" гэж хэвлэнэ үү .

// let text = "h";
// if (text == "a" || text == "e" || text == "i" || text == "u" || text == "y") {
//   console.log("vowal");
// } else {
//   console.log("consonant");
// }
// 3. Өгөгдсөн тоо 1-ээс 100-н хооронд байвал "include" , байхгүй бол "exclude" гэж хэвлэнэ үү .

// let num = 88;
// if (num >= 1 && num <= 100) {
//   console.log("include");
// } else {
//   console.log("exclude");
// }

// 4. 3 тооноос хамгийн ихийг нь олж хэвлэнэ үү .

// let q = 15;
// let w = 27;
// let r = 9;
// if (q >= w && q >= r) {
//   max = q;
// } else if (w >= q && w >= r) {
//   max = w;
// } else {
//   max = r;
// }
// console.log("Хамгийн их тоо:", max);

// 5. Өгөгдсөн жил нь Олимпийн жил мөн бишийг шалгаад хэвлэнэ үү .

// let year = 2020; //
// if (year % 4 === 0) {
//   console.log(year + " он бол Олимпийн жил.");
// } else {
//   console.log(year + " он Олимпийн жил биш.");
// }
// 6. Check the given number is not a prime number .

// 7. Өгөгдсөн тоог анхны тоо мөн бишийг шалгана уу . (1 болон өөртөө хуваагддаг тоог анхны тоо гэнэ)
// example :
// number = 2 // true
// number = 15 // false

// 8. Өгөгдсөн сурагчийн дүнг A , B , C , D , F бүлэгт ангилж хэвлэнэ үү .
//    80-100, A
//    70-89, B
//    60-69, C
//    50-59, D
//    0-49, F

// let dun = 78;
// if (dun >= 80 && dun <= 100) {
//   vnelgee = "A";
// } else if (dun >= 70 && dun <= 89) {
//   vnelgee = "B";
// } else if (dun >= 60 && dun <= 69) {
//   vnelgee = "C";
// } else if (dun >= 50 && dun <= 59) {
//   vnelgee = "D";
// } else if (dun >= 0 && dun <= 49) {
//   vnelgee = "F";
// }
// console.log("Дүн:", dun, "Үнэлгээ:", vnelgee);

// 9. Өгөгдсөн сарыг шалгаад тохирох улирлыг хэвлэнэ үү .
// for example : month = November / Autumn

// let month = 1;
// if (month === 12 || month === 1 || month === 2) {
//   season = "Өвөл";
// } else if (month >= 3 && month <= 5) {
//   season = "Хавар";
// } else if (month >= 6 && month <= 8) {
//   season = "Зун";
// } else if (month >= 9 && month <= 11) {
//   season = "Намар";
// }
// console.log(month + "-р сар бол " + season + "-н улирал юм.");

// 10. Яг одоогийн цагийг шалган өглөө бол "Good morning", өдөр бол "Good afternoon", орой бол "Good evening" гэж хэвлэнэ үү .

// let now = new Date();
// let hour = now.getHours();

// if (hour >= 5 && hour < 12) {
//   greeting = "Good morning";
// } else if (hour >= 12 && hour < 18) {
//   greeting = "Good afternoon";
// } else {
//   greeting = "Good evening";
// }
// console.log("Одоогийн цаг:", hour, "=>", greeting);

// 11. Цаг агаарын температур болон "sunny" эсвэл "rainy" гэж өгөгдөх ба бороотой бол "Don't forget your umbrella!" , нартай бол температур нь 30-аас их бол "It's a hot day!" , 20-30 градус бол "It's a warm day" , 20-оос бага бол "It's a bit cool today" гэж хэвлэнэ үү .
// for example : weather = "sunny" temperature = 25 / It's a warm day.

// let weather = "sunny";
// let temperature = 22;

// if (weather === "rainy") {
//   console.log("Don't forget your umbrella!");
// } else if (weather === "sunny") {
//   if (temperature > 30) {
//     console.log("It's a hot day!");
//   } else if (temperature >= 20 && temperature <= 30) {
//     console.log("It's a warm day");
//   } else {
//     console.log("It's a bit cool today");
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////
// 1. RGB7002 - Гурвалжин Өгөгдсөн гурвалжны периметрийг ол.
// function pr(a, b, c) {
//   return a + b + c;
// }
// const too = pr(3, 4, 5);
// console.log(too);

// let num1 = 3;
// let num2 = 4;
// let num2 = 5;
// console.log("Гурвалжны периметр =", num1 + num2 + num3);

// 2. RGB7001 - 2 тооны нийлбэр
// Өгөгдсөн бүхэл тооны нийлбэрийг ол.
// function sum(a, b) {
//   return a + b;
// }
// const hariu = sum(12, 23);
// console.log(hariu);

// let l = 12;
// let k = 23;
// console.log("Нийлбэр=", l + k);

// 3. RGB7004 - Куб
// Өгөгдсөн кубын эзэлхүүн ба гүйцэд гадаргуугийн талбайг ол.
// let m = 5;
// console.log("Куб =", m ** 3);

// 4.RGB7003 - Тэгш өнцөгт
// Өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.
// let a = 6;
// let b = 4;
// let s = a * b;
// let p = (a + b) * 2;
// console.log("Талбай:", s, "Периметр:", p);

// 5.RGB7005 - Функц 1
// y=3x-5
// let x = 1;
// let y = 3 * x - 5;
// console.log(y);

// 6.RGB7006 - Функц 2
// y=4x-3x+5
// let x = -2;
// let y = 4 * (x * x) - 3 * x + 5;
// console.log(y);

// 7.RGB7007 - Сүүлийн цифр
// Өгөдсөн тооны сүүлийн цифрийг ол.
// let num4 = 476;
// console.log(num4 % 10);

// 8.RGB7008 - Аравтын орны цифр
// Өгөгдсөн тооны аравтын орны цифрийг ол.
// let num1 = 423;
// let h = num1 % 10;
// let j = num1 - h;
// let num2 = j % 100;
// let n = num2 / 10;
// console.log(n);

// 9. RGB7009 - 2 оронтой тоо
// Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол.
// let a1 = 27;
// let a2 = a1 % 10;
// let a3 = a1 - a2;
// let a4 = a3 / 10;
// console.log(a2 * a4);

// 10.RGB7010 - 3 оронтой тоо
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
// let numb1 = 123;
// let numb2 = numb1 % 10;
// let numb3 = numb1 - numb2;
// let numb4 = numb3 % 100;
// let numb5 = numb4 / 10;
// let numb6 = numb3 - numb4;
// let numb7 = numb6 / 100;
// console.log(numb2 * numb5 * numb7);

// 11.RGB7011 - Минут секунд
// Өгөгдсөн секундыг минут секунд болго.
// let minut = 200;
// let sek = 200 % 60;
// let min1 = minut - sek;
// let min2 = min1 / 60;
// console.log(min2 + " минут", sek + " секунд");

// 12.RGB7012 - Цаг минут секунд
// Өгөгдсөн 3612 секундыг цаг минут секунд болго.
// let sek = 3612;
// let sek1 = sek % 3600;
// let sek2 = sek - sek1;
// let clock = sek2 / 3600;
// let sek3 = sek1 % 60;
// let min = sek1 - sek3;

// console.log(clock + " цаг", min + " минут", sek3 + " секунд");

// 13.RGB7014 - Цаг, минут, секунд -> секунд
// Өгөгдсөн цаг, минут, секундыг секунд рүү шилжүүл.
// let clock1 = 1;
// let minut1 = 2;
// let sek = 3;
// let clock = clock1 * 60 * 60;
// let minut = minut1 * 60;
// let sekund = clock + minut + sek;
// console.log(sekund);

// 14.RGB7015 - Хоног цаг
// Өгөгдсөн цагийг хоног цагт шилжүүл.
// let clock = 44;
// let tsag = clock % 24;
// let day = clock - tsag;
// let honog = day / 24;
// console.log(honog + " хоног", tsag + " цаг байна.");

// 15. RGB7016 - Хоног цаг -> цаг
// Өгөгдсөн хоног, цагийг цагт шилжүүл.
// let honog = 2;
// let tsag = 5;
// let clock = honog * 24;
// console.log(clock + tsag);

// 16. RGB7017 - Жил сар
// Өгөгдсөн сарыг жил сар руу шилжүүл.
// let month = 27;
// let month1 = month % 12;
// let year1 = month - month1;
// let year = year1 / 12;
// console.log(year + " жил", month1 + " сар");

// 17. RGB7018 - Жил сар -> сар
// Өгөгдсөн жил, сарыг сард шилжүүл.
// let year = 2;
// let month = 7;
// let year1 = year * 12;
// console.log(month + year1);

// 18. RGB7101 - Хоёр тооны их
// Өгөгдсөн 2 бүхэл тооны ихийг ол.
// let num1 = 16;
// let num2 = 14;
// if (num1 >= num2) {
//   max = num1;
// } else {
//   max = num2;
// }
// console.log("Хамгийн их тоо:", max);

// 19. RGB7102 - Хоёр тооны бага
// Өгөгдсөн 2 тооны багыг ол.
// let num1 = 9;
// let num2 = 12;
// if (num1 <= num2) {
//   min = num1;
// } else {
//   min = num2;
// }
// console.log("Хамгийн бага тоо:", min);

// 20. RGB7103 - 3 тооны их
// Өгөгдсөн 3 тооны ихийг ол.
// let a = 10;
// let b = 5;
// let c = 9;
// if (a >= b && a >= c) {
//   max = a;
// } else if (b >= a && b >= c) {
//   max = b;
// } else {
//   max = c;
// }
// console.log(max);

// 21. RGB7104 - 4 тооны бага
// Өгөгдсөн 4 тооны багыг ол.
// let num1 = 3;
// let num2 = 2;
// let num3 = 1;
// let num4 = 4;
// if (num1 <= num2 && num1 <= num3 && num1 <= num4) {
//   min = num1;
// } else if (num2 <= num1 && num2 <= num3 && num2 <= num4) {
//   min = num2;
// } else if (num3 <= num1 && num3 <= num2 && num3 <= num4) {
//   min = num3;
// } else min = num4;
// console.log("Хамгийн бага тоо=", min);

// 22. RGB7105 - Нийлбэр 80
// Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.
// const num = [85, 75, 96, 69];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//   if (num[i] > 80) {
//     sum = sum + num[i];
//   }
// }
// console.log(sum);

// 23. RGB7106 - Үржвэр 5
// Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа.
// const num = [3, 6, 2, 4];
// vrj = 1;
// for (let i = 0; i < 4; i++) {
//   if (num[i] < 5) {
//     vrj = vrj * num[i];
//   }
// }
// console.log(vrj);

// 24. RGB7107 - Тэгш тоонуудын нийлбэр
// Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. Ядаж 1 тэгш тоо бий.
// const num = [10, 3, 5];
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//   if (num[i] % 2 === 0) {
//     sum = sum + num[i];
//   }
// }
// console.log(sum);

// 25.RGB7108 - Сондгой тоонуудын үржвэр
// Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.
// const num = [5, 2, 3];
// let vrj = 1;
// for (let i = 0; i < 3; i++) {
//   if (num[i] % 2 !== 0) {
//     vrj = vrj * num[i];
//   }
// }
// console.log(vrj);

// 26. RGB7109 - Тэнцүү 5
// Өгөгдсөн 3 тоон дотроос 5-тай тэнцүү тоонуудын тоог ол.
// const num = [2, 5, 5, 3, 5];
// let too = 0;
// for (let i = 0; i < 5; i++) {
//   if (num[i] === 5) {
//     too++;
//   }
// }
// console.log(too);

// 27. RGB7110 - 3-д хуваагдах
// Өгөгдсөн 4 тоон дотроос 3-д хуваагддаг тоонуудын тоог ол.
// const num = [3, 12, 8, 9];
// let too = 0;
// for (let i = 0; i < 4; i++) {
//   if (num[i] % 3 === 0) {
//     too++;
//   }
// }
// console.log(too);

// 28.RGB7111 - 11-д хуваагддаггүй
// Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол.
// const num = [11, 22, 13, 30];
// let sum = 0;
// for (let i = 0; i < 4; i++) {
//   if (num[i] % 11 !== 0) {
//     sum = sum + num[i];
//   }
// }
// console.log(sum);

// 29. RGB7112 - 10-аас их
// Өгөгдсөн тоо 10-аас их бол YES үгүй бол NO гэж хэвлэ.
// let num = 23;
// if (num >= 10) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 30. RGB7113 - 5-аас бага
// Өгөгдсөн тоо 5-аас бага бол  YES үгүй бол NO гэж хэвлэ.
// let num = 9;
// if (num <= 5) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 31. RGB7114 - Тэгш тоонууд YES
// Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.
// let num = [3, 4, 5];
// for (let i = 0; i < 3; i++) {
//   if (num[i] % 2 === 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// 32. RGB7201 - IOI
// Дэлгэцэнд IOI гэж 1 удаа хэвлэ.
// console.log("IOI");

// 33. RGB7202 - IOI 3 удаа
// Дэлгэцэнд IOI гэж 3 удаа хэвлэ.
// for (let i = 0; i < 3; i++) {
//   console.log("IOI");
// }

// 34. RGB7203 - IOI n удаа
// IOI үгийг өгөгдсөн тоон удаа хэвлэ.
// const n = 4;
// for (let i = 0; i < n; i++) {
//   console.log("IOI");
// }

// 35. RGB7204 - Эхний n тооны нийлбэр
// Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
// const n = 5;
// let num = 0;
// for (let i = 0; i <= n; i++) {
//   num += i;
// }
// console.log(num);

// 36. RGB7205 - n!
// n! ол
// const n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// 37. RGB7206 - 100-г n удаа нэм
// 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// const num = 6;
// let num1 = 0;
// for (let i = 1; i <= num; i++) {
//   num1 += 100;
// }
// console.log(num1);

// 38. RGB7207 - a тоог n удаа нэм
// Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// const a = 50;
// const b = 6;
// let num = 0;
// for (let i = 0; i < b; i++) {
//   num += a;
// }
// console.log(num);

// 39. RGB7208 - 2-ын n зэрэг
// 2-ын өгөгдсөн тоон зэргийг ол.
// const n = 5;
// let a = 1;
// for (let i = 0; i < n; i++) {
//   a *= 2;
// }
// console.log(a);

// 40. RGB7209 - a тооны n зэрэг
// Өгөгдсөн тооны n зэргийг ол.
// const a = 5;
// const n = 3;
// let num = 1;
// for (let i = 0; i < n; i++) {
//   num *= a;
// }
// console.log(num);

//41. RGB7115 - Тэнцсэн, унасан
// Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана.
// Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо.
// const num = 5;
// if (num > 3) {
//   console.log("Tentssen");
// } else {
//   console.log("Unasan");
// }

// 42. RGB7116 - 5-аас онц руу
// Өгөгдсөн тоон дүнг үсгэн дүн рүү шилжүүл.
// const a = 3;
// if (a === 5) {
//   console.log("Onts");
// } else if (a == 4) {
//   console.log("Sain");
// } else if (a == 3) {
//   console.log("Dund");
// } else if (a == 2) {
//   console.log("Muu");
// }

// 43. RGB7117 - Тоон үнэлгээнээс үсгэнд
// Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл.
// const num = 110;

// if (num >= 90 && num <= 100) {
//   console.log("A");
// } else if (num >= 80 && num <= 89) {
//   console.log("B");
// } else if (num >= 70 && num <= 79) {
//   console.log("C");
// } else if (num >= 60 && num <= 69) {
//   console.log("D");
// } else if (num >= 0 && num <= 59) {
//   console.log("F");
// } else {
//   console.log("null");
// }

// 44.RGB7118 - Гараг
// Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг
//  англиар хэвлэ. Эхний үсгийг л томоор бичнэ.
// const n = 6;
// if (n === 1) {
//   console.log("Monday");
// } else if (n == 2) {
//   console.log("Tuesday");
// } else if (n == 3) {
//   console.log("Wednesday");
// } else if (n == 4) {
//   console.log("Thursday");
// } else if (n == 5) {
//   console.log("Friday");
// } else if (n == 6) {
//   console.log("Saturday");
// } else if (n == 7) {
//   console.log("Sunday");
// } else {
//   console.log("null");
// }

// 45. RGB7119 - Улирал
// Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.
// const month = 11;
// if (month === 11 || month === 12 || month === 1) {
//   season = "Winter";
// } else if (month >= 2 && month <= 4) {
//   season = "Spring";
// } else if (month >= 5 && month <= 7) {
//   season = "Summer";
// } else if (month >= 8 && month <= 10) {
//   season = "Autumn";
// } else {
//   season = "Байхгүй";
// }
// console.log(month + "-р сар бол " + season);

// 46. RGB7120 - Гурвалжин эсэх
// Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ.
// const num = 3;
// const num1 = 4;
// const num2 = 6;
// if (num + num1 > num2 && num + num2 > num1 && num1 + num2 > num) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 47. RGB7210 - Тооны хүрд
// Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга.
// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(n + "*" + i + "=" + n * i);
// }
//48. RGB7211 - Тооны зэргийн хүрд
// a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ.
// let a = 3;
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(a + "**" + i + "=" + a ** i);
// }

// 49. RGB7019 - Илэрхийлэл 1
// Өгөгдсөн илэрхийллийн утгыг ол. A=B*C-D
// let b = 2;
// let c = 3;
// let d = 4;
// let a = b * c - d;
// console.log(b + "*" + c + "-" + d + "=" + a);

/////////////////////////////////////////////////////////////////////////////////////////
// 1. RGB7170 - Давхрын хэд дэх хаалга
// Нэг орцтой 5-н давхар байр, орц бүрт 4 хаалгатай бол
// 10 тоотын айл хэдэн давхарт хэд дэхь хаалганд амьдардгыг ол.
// let a = 5;
// let b = 4;
// let d = 10;
// let r = Math.ceil(d / b);
// let e = Math.floor(d % b);
// console.log(r + " дахь давхрын", e + " дахь хаалга");

// 2. RGB7171 - Орц, давхар, хаалга
// 5 давхар байшин 3 орцтой давхар бүрт 4 айлтай. 32 тоот нь
// хэддүгээр орцны, хэдэн давхрын хэд дэх хаалга вэ?
// let dav = 5;
// let orts = 3;
// let haalga = 4;
// let toot = 32;
// let niit = dav * haalga;
// let orts1 = Math.floor((toot - 1) / niit + 1);
// let haa = ((toot - 1) % niit) + 1;
// let dav1 = Math.floor((haa - 1) / haalga + 1);
// let haalga1 = ((haa - 1) % haalga) + 1;
// console.log(orts1, dav1, haalga1);

// 3. RGB7070 - Нийлбэр 1
// Өгөгдсөн натурал тоо n хүртэлх натурал тоонуудын нийлбэрийг ол.
// let n = 18;
// console.log((n * (n + 1)) / 2);

// 4. RGB7071 - Нийлбэр 2
// Өгөгдсөн n тоо хүртэлх квадратуудын нийлбэрийг ол.
// let n = 3;
// console.log((n * (n + 1) * (2 * n + 1)) / 6);

// 5. RGB7072 - Нийлбэр 3
// Өгөгдсөн сондгой тоо n хүртэлх натурал сондгой тоонуудын нийлбэрийг ол.
// let n = 7;
// let k = (n + 1) / 2;
// let sum = k * k;
// console.log(sum);

// 6. RGB7301 - Ахмад орны цифр
// Өгөгдсөн натурал тооны ахмад орны цифрийг ол.
// let n = 1234;
// let ah = Math.floor((n /= 1000));
// console.log(ah);

// 7. RGB7302 - Цифрүүдийн нийлбэр
// Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.
// const n = 234;
// let a = n % 10;
// let d = n - a;
// let e = d / 10;
// let b = e % 10;
// let f = e - b;
// let c = f / 10;
// let sum = a + b + c;
// console.log(sum);

// 8. RGB7303 - Тэгш цифрүүдийн нийлбэр
// Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол.
// const n = [3, 4, 2, 6, 7];
// let sum = 0;
// for (let i = 1; i < 5; i++) {
//   if (n[i] % 2 == 0) {
//     sum += n[i];
//   }
// }
// console.log(sum);

// 9. RGB7304 - Сондгой цифрүүдийн тоо
// Өгөгдсөн тоон дахь сондгой цифрүүдийн тоог ол.
// const n = [2, 6, 4, 5, 7];
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   if (n[i] % 2 !== 0) {
//     sum++;
//   }
// }
// console.log(sum);

// 10. RGB7305 - Цифрийн давталт
// Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол.
// const n = [2, 6, 3, 5, 3];
// let c = 0;
// for (let i = 1; i < 5; i++) {
//   if (n[i] - 3 == 0) {
//     c++;
//   }
// }
// console.log(c);

// 11. RGB7306 - Тоон дахь их цифр
// Өгөгдсөн тооны их цифрийг ол.
// const n = [4, 6, 3, 2];
// let n = 4632;
// let max = 0;
// while (n > 0) {
//   let digit = n % 10;
//   if (digit > max) {
//     max = digit;
//   }
//   n = Math.floor(n / 10);
// }
// console.log("Хамгийн их цифр =", max);

// 12. RGB7307 - Тоон дахь бага цифр
// Өгөгдсөн тоон дахь бага цифрийг ол.
// let n = 2649;
// let min = 9;
// while (n > 0) {
//   let digit = n % 10;
//   if (digit < min) {
//     min = digit;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(min);

// 13. RGB7308 - Тонгорогсон тоо
// Өгөгдсөн тооны тонгорогсон тоог ол.
// let n = 1234;
// let reverse = 0;
// while (n > 0) {
//   let digit = n % 10;
//   reverse = reverse * 10 + digit;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);

// 14. RGB7309 - Палиндром эсэх
// Өгөгдсөн тоо палиндром бол YES үгүй бол NO гэж хэвлэ.
// Палиндром тоо гэдэг нь тонгорогсон тоотойгоо тэнцүү тоог хэлнэ.
// let num = 12331;
// let num1 = num;
// let reverse = 0;
// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }
// if (reverse - num1 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// 15. RGB7310 - Хоёрын зэрэгт
// Өгөгдсөн тоо хоёрын зэрэгт мөн бол YES үгүй бол NO гэж хэвлэ.
// let num = 24;
// while (num % 2 == 0) {
//   num = num / 2;
//   if (num == 1) {
//     console.log("YES");
//   }
// }
// if (num !== 1) {
//   console.log("NO");
// }

// 16. RGB7311 - Гуравын зэрэгтэд хураа
// Өгөгдсөн тоог 3-ын зэрэгтэд хураа.
// let n = 36;
// while (n % 3 == 0) {
//   n = n / 3;
// }
// console.log(n);

// 17. RGB7312 - Тооны факториал
// Өгөгдсөн тоо ямар нэгэн тооны факториал бол тэр тоог хэвлэ.
// Үгүй бол No гэж хэвлэ.
// let x = 20;
// let fact = 1;
// let i = 1;
// while (fact < x) {
//   i++;
//   fact *= i;
// }
// if (fact == x) {
//   console.log(i);
// } else {
//   console.log("NO");
// }

// 18. RGB7313 - ХИЕХ
// Өгөгдсөн хоёр натурал тооны хамгийн их ерөнхий хуваагчийг ол.
// let [a, b] = [9, 15];
// while (a != b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }
// let gcd = a;
// console.log(a);

// 19. RGB7314 - ХБЕХ
// Өгөгдсөн хоёр натурал тооны хамгийн бага ерөнхий хуваагдагчийг ол.
// let [a, b] = [9, 15];
// let x = a,
//   y = b;
// while (x !== y) {
//   if (x > y) {
//     x = x - y;
//   } else {
//     y = y - x;
//   }
// }
// let gcd = x;
// let lcm = (a * b) / gcd;
// console.log(lcm);

// let i = 1;
// while (i <= a * b) {
//   if (i % a == 0 && i % b == 0) {
//     console.log(i);
//     i = a * b;
//   }
//   i++;
// }

// 20. RGB7315 - Бутархайг хураа
// Өгөгдсөн энгийн бутархайг хураа.
// let [a, b] = [9, 15];
// let x = a;
// let y = b;
// while (x !== y) {
//   if (x > y) {
//     x = x - y;
//   } else {
//     y = y - x;
//   }
// }
// let gcd = x;
// console.log(a / gcd + "/" + b / gcd);

// 21. RGB7220 - Цифр давталт
// Өгөгдсөн цифрийг цифрийнх нь тоогоор давтан хэвлэ.
// let n = 4;
// let a = "";
// for (let i = 0; i < n; i++) {
//   a += n;
// }
// console.log(a);

// 22. RGB7221 - Цифр хүртэлх
// Өгөгдсөн цифр хүртэлх цифрүүдийг нэг хоосон зайгаар тусгаарлан хэвлэ.
//  Сүүлийн цифрийн ард хоосон зай байхгүй. Мөр дуусгана.
// let n = 4;
// let a = "";
// for (let i = 0; i < n; i++) {
//   if (i == n - 1) {
//     a = a + i;
//   } else {
//     a = a + i + " ";
//   }
// }
// console.log(a);

// 23. RGB7222 - Есөөс цифр хүртэл
// Есийн цифрээс өгөгдсөн цифр хүртэл нэг нэгээр нэг мөрөнд хэвлэ.
// let n = 5;
// for (let i = 9; i >= n; i--) {
//   console.log(i);
// }

// 24. RGB7400 - Давхар давталт 0
// Өгөгдсөн натурал тоо хүртэлх тоонуудыг дараах хэлбэрээр хэвлэнэ үү.
// let n = 5;
// let a = "";
// for (let i = 1; i <= n; i++) {
//   if (i == n - 1) {
//     a = a + i;
//   } else {
//     a = a + i + "";
//   }
// }
// for (let j = 1; j <= n; j++) {
//   console.log(a);
// }

// 25. RGB7401 - Давхар давталт 1
// Өгөгдсөн тоо болон тэрхүү тоо хүртэлх тоонуудыг жишээн дээрх хэлбэрээр хэвлэ.
// let n = 5;
// let a = " ";
// for (let i = 5; i >= 1; i--) {
//   if (i == n) {
//     a = a + i + " ";
//   } else {
//     a = a + i + " ";
//   }
// }
// for (let j = 1; j <= n; j++) {
//   console.log(a);
// }

// 26. RGB7402 - Давхар давталт 2
// Өгөгдсөн бүхэл тоон тусламжтайгаар дараах тоон хэлбэрийг үүсгэ.
// let n = 5;
// let a = " ";
// for (let i = 1; i <= 5; i++) {
//   if (i == n) {
//     a = a + i;
//   } else {
//     a = a + i + " ";
//   }
// }
// console.log(a);

// 27. RGB7403 - Давхар давталт 3
// Өгөгдсөн тоон тусламжтайгаар жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.

// 28. RGB7404 - Давхар давталт 4
// Өгөгдсөн тоон тусламжтайгаар жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.

// 29. RGB7405 - Давхар давталт 5
// Өгөгдсөн тоон тусламтайгаар жишээн дээрхтэй төстэй тоон хэлбэрийг үүсгэ.

// 30. RGB7090 - Шагай
// k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол.
// Шагай нь морь, тэмээ, хонь, ямаа гэсэн 4 янзаар бууна.

// 31. RGB7172 - Гурвалжны хэлбэр
// Гурвалжны 3 тал нь бүхэл тоогоор өгөгдсөн бол хэлбэрийг нь тодорхойл.
// Хэлбэр нь тэгш өнцөгт, хурц өнцөгт, мохоо өнцөгтийн аль нэг байна.

// 32. RGB7316 - Гурван тооны ХБЕХ
// Өгөгдсөн 3 натурал тооны хамгийн бага ерөнхий хуваагдагчийг (ХБЕХ) ол.

// 33. RGB7317 - Цөөн квадрат
// Өгөгдсөн тэгш өнцөгтийг хамгийн цөөн квадратадуудад

// 34. RGB7318 - Залгаад квадрат зэрэг
// Өгөгдсөн натурал тооны бичиглэлийн эх адагт нь 1-ийн
// цифр залгаж бичээд квадрат зэрэгт дэвшүүл.

// const fruits = ["apple", "banana", "orange", "kiwi", "mango", "grape"];
// console.log(fruits[2]);
// console.log(fruits[3], fruits[5]);
// const fruitNumber = fruits.length;
// console.log(fruitNumber);
// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] % 2 === 0) {
//     console.log(number[i] + " бол тэгш тоо юм.");
//   } else {
//     console.log(number[i] + " бол сондгой тоо юм.");
//   }
// }

// RGB7500 - Массив нийлбэр
// Өгөгдсөн бүхэл тоон дарааллын гишүүдийн нийлбэрийг ол.
// const num = [, 12, 13, 14, 15];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);

// RGB7501 - Массив тэгээс их нийлбэр
// Өгөгдсөн нэг хэмжээст массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// const num = [5, -3, 4, -10];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) sum += num[i];
// }
// console.log(sum);

// RGB7502 - Муугийн тоо
// Сурагчдын дүн нэг хэмжээст массиваар өгөгдөв. Муу дүгнэгдсэн сурагчдын тоог ол.
// const dun = [96, 59, 55, 55, 62];
// let muu = 0;
// let i = 0;
// for (let i = 0; i < 5; i++) {
//   if (dun[i] <= 59) {
//     muu++;
//   }
// }
// console.log(muu);

// RGB7503 - Сондгой нь их үү
// Нэг хэмжээст массив дахь сондгой тоонууд нь тэгш
// тоонуудаасаа их бол YES, үгүй бол NO гэж хэвлэ.
// const num = [5, 2, 3, 4, 1, 6];
// let sondgoi = 0;
// let tegsh = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 !== 0) {
//     sondgoi += num[i];
//   } else if (num[i] % 2 == 0) {
//     tegsh += num[i];
//   }
// }
// if (sondgoi > tegsh) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// RGB7504 - Массивын их
// Өгөгдсөн нэг хэмжээст бүхэл тоон массив дахь хамгийн их элементийг / тоог / ол.
// const n = [3, -2, 4, 7, -6];
// let max = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] > max) {
//     max = n[i];
//   }
// }
// console.log(max);

// RGB7505 - Массивын бага
// Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн бага элементийг /тоог/ ол.
// const n = [3, -2, 4, 7, -6];
// let min = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] < min) {
//     min = n[i];
//   }
// }
// console.log(min);

// RGB7506 - Массивт өгөгдсөн тоо хэд
// Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо хэд байгааг ол.
// const n = [1, 5, 4, 5, 3, 9];
// let num = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] === 5) {
//     num++;
//   }
// }
// console.log(num);

// RGB7507 - Массивын их нь хэд дэх
// Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн их элемент хэд дэх нь вэ?
// Хэрэв хамгийн их элемент 1-ээс их бол бага дугаарыг нь хэвлэнэ.
// const n = [9, 10, 8, 10, 6];
// let num = 10;

// RGB7508 - Массивын их хэд
// Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн их элемент хэд байгааг ол.
//  Нэг давталтаар олбол сайн
// const n = [5, 8, 2, 6, 8, 6];
// let maxNum = 0;
// let count = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] >= n[maxNum]) {
//     maxNum = i;
//   } else if (i === maxNum) {
//     count++;
//   }
// }
// console.log(maxNum);
// let index = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] >= num[index]) {
//     index = i;
//   }
// }
// console.log(index);

// RGB7509 - Массивт байгаа эсэх
// Өгагдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо байвал YES үгүй бол NO гэж хэвлэ.
// Таарангуут давталтыг зогсоох.
// const n = [1, 2, 3, 4, 5];
// let num = 2;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] === num) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// const num = [12, 98, 80, 80, 76, 27];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);

// Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// const num = [2, -2, -4, 9, 80, 76, 89];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > 0) {
//     sum += num[i];
//   }
// }
// console.log(sum);

// Өгөгдсөн массивын хамгийн бага элементийг ол.
// const num = [12, 45, 67, 6, 67, 4, 7];
// let min = num[0];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] < min) {
//     min = num[i];
//   }
// }
// console.log(min);

// Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ?
// Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
// const num = [12, 1, 98, 67, 87, 90, 98];
// let index = 0;
// for (let i = 0; i < num.length; i++) {
//   if (num[i] >= num[index]) {
//     index = i;
//   }
// }
// console.log(index);

// 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const num = [12, 98, 80, 80, 76, 27];
// let esreg = [];
// for (let i = [num.length] - 1; i >= 0; i--) {
//   esreg.push(num[i]);
// }
// console.log(esreg);

// 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// const num = [12, 45, 67, 6, 76, 4, 7];
// let hursh = [];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > num[i - 1] && num[i] > num[i + 1]) {
//     hursh.push(num[i]);
//   }
// }
// console.log(hursh);

// 3. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const num = [12, 1, 98, 67, 4, 98, 7];
// for (let i = 0; i < num.length; i++) {
//   for (let j = i + 1; j < num.length; j++) {
//     console.log(num[i], num[j]);
//   }
// }

// 4. Массив болон тоо өгөгдөв.
// Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// const num = [19, 30, 15, 6, 18, 30, 7];
// const x = 37;
// let count = 0;
// for (let i = 0; i < num.length; i++) {
//   for (let j = i + 1; j < num.length; j++) {
//     if (num[i] + num[j] === x) {
//       count++;
//     }
//   }
// }
// console.log(count);

// 5. Өгөгдсөн 2 массивийн огтлолцлыг ол
// const a = [19, 45, 15, 6, 18, 30, 7];
// const b = [22, 33, 19, 44, 30, 55];
// let ogt = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] === b[j]) {
//       ogt.push(a[i]);
//     }
//   }
// }
// console.log(ogt);

// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// const num = [2, -2, 9, -4, 80, 76, 89];
// for (let i = 0; i < num.length; i++) {}
// num.sort((a, b) => a - b);
// console.log(num);
// const num = [2, -2, 9, -4, 80, 76, 89];
// let ehlel = [];
// for (let i = 0; i <= 3; i++) {
//   for (let j = i + 1; j <= 3; j++) {
//     if (num[i] > num[j]) {
//       ehlel = num[i];
//       num[i] = num[j];
//       num[j] = ehlel;
//     }
//   }
// }
// console.log(num);

// 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв.
//  Тэр тоог ол
// const num = [1, 2, 3, 4, 6, 7, 8];
// for (let i = 0; i < num.length; i++) {
//   if (num[i + 1] - num[i] !== 1) {
//     console.log(num[i] + 1);
//   }
// }
// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа
// function neg(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == number) {
//       return i;
//     }
//   }
//   return -1;
// }
// let array = [19, 45, 15, 6, 18, 30, 7];
// let number = 15;
// console.log(neg(array, number));

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4
// function tsicl(num) {
//   let temp = num[num.length - 1];
//   for (let i = [num.length - 1]; i > 0; i--) {
//     num[i] = num[i - 1];
//   }
//   num[0] = temp;

//   return num;
// }
// const num = [1, 2, 3, 4, 5];
// console.log(tsicl(num));

// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа
// function bod(n) {
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] > n[i + 1]) {
//       return "False";
//     }
//   }
//   return "True";
// }
// const n = [2, 6, 8, 12, 15, 20];
// let esreg = [];
// console.log(bod(n));

// HackerLand University has the following grading policy:
//   - Every student receives a  in the inclusive range from  to .
//   - Any  less than  is a failing grade.
//   Sam is a professor at the university and likes to round each student's  according to these rules:
//   If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
//   If the value of  is less than , no rounding occurs as the result will still be a failing grade.
//   Examples:
//   84 - round to  (85 - 84 is less than 3)
//   28 - do not round (result is less than 40)
//   57 - do not round (60 - 57 is 3 or higher)
//  Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// function dun(scores) {
//   let shineDun = [];
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] <= 39) {
//       scores[i] = i;
//     }
//     if (scores[i] - 3) {
//     }
//   }
// }
// const scores = [84, 28, 57];
// console.log(dun(scores));

// 1. Массивын дундаж ба медиан
//    Массив авч, дундаж (average) болон медианыг буцаа.
//    Жишээ: [1,2,3,4,5] → {avg: 3, median: 3}
function avg(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let avg = sum / numbers.length;
  let sorted = numbers.slice().sort((a, b) => a - b);
  let mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    median = (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    median = sorted[mid];
  }
  return { avg, median };
}
const numbers = [1, 7, 3, 10, 4];
console.log(avg(numbers));

// 2. String доторх эгшиг тоолох
//    String авч, хэдэн эгшиг (a, e, i, o, u) байгааг буцаа.
//     Жишээ: "hello" → 2
function egshig(text) {
  let shalgah = "aeiou";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < shalgah.length; j++) {
      if (text[i] == shalgah[j]) {
        count++;
      }
    }
  }
  return count;
}

let text = "hello,hello";
console.log(egshig(text), "egshigiin too");

// 3. Anagram шалгах
//    Хоёр string авч, үсгийн дараалал өөр боловч ижил үсгээр бүтсэн эсэхийг шалга.
//    Жишээ: "listen" & "silent" → true
function vgs(textHoyr, esreg) {
  if (textHoyr.length !== esreg.length) {
    return false;
  }
  let count = [];
  for (let i = 0; i < textHoyr.length; i++) {
    let ch = textHoyr[i].toLowerCase();
    count[ch] = (count[ch] || 0) + 1;
  }
  for (let j = 0; j < esreg.length; j++) {
    let ch = esreg[j].toLowerCase();
    if (!count[ch]) {
      return false;
    }
    count[ch]--;
  }
  return true;
}
let textHoyr = "listen";
let esreg = "silent";

console.log(vgs(textHoyr, esreg));

// 4. Тоог Ром тоо болгох
//    Тоо авч, Ром цифр болгон буцаадаг функц бич.
//    Жишээ: 14 → XIV, 2025 → MMXXV
function rom(num) {
  const numbers = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1];
  const rom = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let n = "";
  for (let i = 0; i < numbers.length; i++) {}
  return n;
}
// console.log(rom(num));

// 5. Longest Increasing Subsequence (LIС) – энгийн хувилбар
//    Массив авч, хамгийн урт өсөх дарааллын уртыг буцаа.
//.   Жишээ: [10,9,2,5,3,7,101,18] → 4 ([2,3,7,101])
function LIC(nums) {
  for (let i = 0; i < array.length; i++) {}
}
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// 6. String доторх хамгийн урт palindrome substring
//    String авч, хамгийн урт палиндром substring буцаа.
//.   Жишээ: "babad" → "bab" эсвэл "aba"

// 7. Массив дахь дундажтай ойрхон тоо
//.   Массив авч, дундажид хамгийн ойрхон тоог буцаа.
//.   Жишээ: [2,5,8,12] → 8 (дундаж 6.75)
// function avg(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     let avg = sum / nums.length;
//     return avg;
//   }
// }

// const nums = [2, 5, 8, 12];
// console.log(avg(nums));
