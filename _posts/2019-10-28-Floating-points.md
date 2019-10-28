---
Layout:
Title: "Floating points"
Date: "2019-10-28"
---

## Floating points

To figure out what a floating point is, we first start with the idea that there are many kinds of numbers, which we will go through. We call 1 an integer – it is a whole number with no fractional values in it.

½ is what’s called a fraction. It implies that the whole number 1 is being divided into 2. The concept of fractions is a very important one in deriving floating points.

0.5 is commonly known as a decimal number. However, a very important distinction needs to be made – 0.5 is actually the decimal (base-10) representation of the fraction ½. This is how ½ is represented when written as a base-10 number – for this article, we will call it the dot notation. We call 0.5 a finite representation because the numbers in the representation for the fraction are finite – there are no more numbers after 5 in 0.5. An infinite representation would for example be 0.3333... when representing ⅓. Again, this idea will be important later on in our discussion.

There exists another way of representing numbers other than as whole numbers, fractions or decimal notations. You might have actually seen it before. It looks something like this: 6.022 x 1023 (Trivia: That is Avogadro’s number, which is the number of molecules in a mole of chemical solution). It’s commonly known as the standard form, or scientific notation. That form can be generalized to something that looks like this:

D1.D2D3D4...Dp x BE

The general form is called a floating point.

The sequence of p digits of D, D1.D2D3D4...Dp are called Significands or Mantissa. p is the number of significant digits, commonly called the Precision. x follows the mantissa and is part of the notation (the multiplication symbol that will be used throughout this article will be *). The Base digit comes after, followed by the Exponent. The exponent can be a positive or negative number.

The beauty of the floating point is that it can be used to represent any number at all. For example, the integer 1 can be represented as 1.0 x 100. The speed of light can be represented as 2.99792458 x 108 meters per second. 1/2 can be represented in base-2 as 0.1 x 20.