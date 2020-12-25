/**
 * 题目：给出一段长度为n的像素像素序列，每个像素取值为0-255，使用二进制存储。
 * 由于可能存在若干个像素值接近的序列，在这些序列中不用为每个像素都分配8个比特位，
 * 因此合理的分段存储可以节省空间。另外，每段标记信息需要额外的11个bit，每个分段
 * 最多256个像素。
 * 求给出序列的最小存储bit数？
 * 
 * 解：s[i]表示前i个像素分段后的最优解，s[i] = s[i-j+1] + b[i-j+1][i]*j + 11
 * 其中j表示可使s[i]取值最小的最后分段长度，也就是说找出j的值需要一次循环
 */

 /**
  * 
  * @param {@type Array} images
  */
 function ImageCompressing(images) {
   const s = Array(images.length + 1)
   s[0] = 1
   const maxSeg = 256
   // 假设b的取值已知
   const b = Array(images.length + 1)
   b.forEach(i => b[i] = Array(images.length + 1))

   for (let i = 1; i <= images.length; i ++ ) {
     s[i] = s[i-1] + b[i][i]
     for (let j = 2; j <= Math.min(maxSeg, i); j ++ ) {
       s[i] = Math.min(s[i], s[i-j] + b[i-j+1][i] * j)
     }
     s[i] += 11
   }
   return s[images.length]
 }