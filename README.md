npx create-next-app@latest evidencia-modelacion --typescript
npm install next@latest react@latest react-dom@latest 
npm install @mui/material @emotion/react @emotion/styled
npm install @tanstack/react-query

npm install prisma --save-dev
npx prisma init 
npx prisma generate
npx prisma db pull

npm run dev