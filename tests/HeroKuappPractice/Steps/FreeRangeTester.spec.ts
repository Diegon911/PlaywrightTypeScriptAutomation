import { test, Browser, Page, expect } from '@playwright/test';
 
(async () => {
  let browser: Browser;
  let page: Page;
 
  test.describe('Navegación en www.freerangetesters.com de practica', () => {
 
    const secciones = [
      { nombre: 'Academia', url: '/academia', tituloEsperado: 'Academia' },
      { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
      { nombre: 'Mentorías', url: '/mentoria-1-1-con-pato', tituloEsperado: 'Mentoría personalizada de avance de carrera para testers de software' },
      { nombre: 'Talleres', url: '/talleres-y-webinars', tituloEsperado: 'Webinars en vivo' },
      { nombre: 'Blog', url: '/blog', tituloEsperado: 'Free Range Testers' },
      { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' }
            // Agrega más secciones si es necesario
    ];
    for (const seccion of secciones) {
      test(`Validar redirección a la sección "${seccion.nombre}"`, async ({ page }) => {
        await test.step(`Estando yo en la web principal www.freerangetesters.com`, async () => {
          page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle('Free Range Testers');
        });
 
        await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
          page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true }).click();
          await page.waitForURL(`**${seccion.url}`);
        });
 
        await test.step(`Soy redirigido a la sección de título "${seccion.tituloEsperado}"`, async () => {
          await expect(page).toHaveTitle(seccion.tituloEsperado);
 
 
        });
      });
    }
 
  })
 
 
})(); 