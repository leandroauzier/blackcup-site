import { createCanvas } from 'canvas';

export default function generateInitialsImage(title: string = '', isIcon: boolean = false) {
  if (typeof title !== 'string') {
    throw new Error('O parâmetro title deve ser uma string');
  }
  const cleanedTitle = title.replace(/[^\w\s]/gi, '');
  const words = cleanedTitle.split(/\s+/);
  const initials = words.map(word => word.charAt(0).toUpperCase());
  const res = initials.join('');
  const canvas = createCanvas(isIcon ? 200 : 768, isIcon ? 200 : 768);
  const ctx = canvas.getContext('2d');
  if(ctx === null){
    throw new Error("Context is null")
  }
  ctx.fillStyle = '#4285F4'
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '100px Arial';
  ctx.fillStyle = '#FFFFFF'; // Cor das letras
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(res, canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL();
}