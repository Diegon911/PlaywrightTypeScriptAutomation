import { test, Browser, Page, expect } from '@playwright/test';
import path from 'path';
import { HeroKuappTextPage } from '../Pages/HeroKuappTextPage';
import { HeroKuappAddRemovePage } from '../Pages/HeroKuappAddRemovePage';
import { HeroKuappBrokenImagesPage } from '../Pages/HeroKuappBrokenImagesPage';
import { HeroKuappCheckboxPage } from '../Pages/HeroKuappCheckboxPage';
import { HeroKuappRightClickPage } from '../Pages/HeroKuappRightClickPage';
import { HeroKuappDragDropPage } from '../Pages/HeroKuappDragDropPage';
import { HeroKuappDropdownPage } from '../Pages/HeroKuappDropdownPage';
import { HeroKuappDynamicElementsPage } from '../Pages/HeroKuappDynamicElementsPage';
import { HeroKuappLoadPage } from '../Pages/HeroKuappLoadPage';
import { HeroKuappAdPage } from '../Pages/HeroKuappAdPage';
import { HeroKuappDownloadPage } from '../Pages/HeroKuappDownloadPage';
import { HeroKuappUploadPage } from '../Pages/HeroKuappUploadPage';
import { HeroKuappFloatingPage } from '../Pages/HeroKuappFloatingPage';
import { HeroKuappForgotPage } from '../Pages/HeroKuappForgotPage';
import { HeroKuappAuthPage } from '../Pages/HeroKuappAuthPage';
import { HeroKuappFramesPage } from '../Pages/HeroKuappFramesPage';
import { HeroKuappGeolocationPage } from '../Pages/HeroKuappGeolocationPage';
import { HeroKuappSliderPage } from '../Pages/HeroKuappSliderPage';
import { HeroKuappHoverPage } from '../Pages/HeroKuappHoverPage';
import { HeroKuappInputsPage } from '../Pages/HeroKuappInputsPage';
import { HeroKauppJqueryPage } from '../Pages/HeroKuappJqueryPage';
import { HeroKuappAlertsPage } from '../Pages/HeroKuappAlertsPage';
import { HeroKuappKeyPressPage } from '../Pages/HeroKuappKeyPressPage';
import { HeroKuappMultiTabPage } from '../Pages/HeroKuappMultiTabPage';
import { HeroKuappNotificationPage } from '../Pages/HeroKuappNotificationPage';
import { HeroKuappShadowPage } from '../Pages/HeroKuappShadowPage';
import { HeroKuappTablesPage } from '../Pages/HeroKuappTablesPage';

test.describe('Ejericios practicos de la pagina HeroKuapp para automatizar con playwright y typescript', () => {

test('Validacion de texto dinamico en la pagina de Herokuapp A/B Testing', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el texto dinamico', async () => {
        const heroTextPage = new HeroKuappTextPage(page);
        await page.goto('https://the-internet.herokuapp.com/abtest');
        await expect(heroTextPage.titleLabel, 'El titulo no es correcto').toContainText('Test');
        await expect(heroTextPage.textLabel, 'El texto no es correcto').toHaveText('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
        })
})

test('Validacion de botones en Herokuapp Add/Remove Elements', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el funcionamiento de los botones', async () => {
        const heroAddRemovePage = new HeroKuappAddRemovePage(page);
        await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
        await expect(heroAddRemovePage.titleLabel, 'El titulo no es correcto').toContainText('Add/Remove Elements');
        await heroAddRemovePage.addButton.click();
        await expect(heroAddRemovePage.deleteButton, 'El elemento no esta visible').toBeVisible();
        await heroAddRemovePage.deleteButton.click();
        await expect(heroAddRemovePage.deleteButton, 'El elemento esta visible').toBeHidden();
        })
})

test('Validacion de imagenes en la pagina HeroKuapp Broken Images', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido las 3 imagenes', async () => {
        const heroImagePage = new HeroKuappBrokenImagesPage(page);
        await page.goto('https://the-internet.herokuapp.com/broken_images');
        await expect(heroImagePage.titleLabel, 'El titulo no es correcto').toContainText('Broken Images');
        await expect(heroImagePage.img1, 'La imagen no esta presente').toBeVisible();
        await expect(heroImagePage.img2, 'La imagen no esta presente').toBeVisible();
        await expect(heroImagePage.img3, 'La imagen no esta presente').toBeVisible();
        await page.goto('https://the-internet.herokuapp.com/asdf.jpg');
        await expect(heroImagePage.img1Result, 'La imagen esta visible').toHaveText('Not Found');
        await page.goto('https://the-internet.herokuapp.com/hjkl.jpg');
        await expect(heroImagePage.img2Result, 'La imagen esta visible').toHaveText('Not Found');
        await page.goto('https://the-internet.herokuapp.com/img/avatar-blank.jpg');
        await expect(heroImagePage.img3Result, 'La imagen no esta visible').toBeVisible();
        })
})

test('Validacion de checkbox en la pagina HeroKuapp Checkboxes', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el funcionamiento de los checkbox', async () => {
        const heroCheckboxPage = new HeroKuappCheckboxPage(page);
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await expect(heroCheckboxPage.titleLabel, 'El titulo no es correcto').toContainText('Checkboxes');
        await expect(heroCheckboxPage.checkbox1, 'El checkbox esta seleccionado').not.toBeChecked();
        await expect(heroCheckboxPage.checkbox2, 'El checkbox no esta seleccionado').toBeChecked();
        await heroCheckboxPage.checkbox1.check();
        await heroCheckboxPage.checkbox1.uncheck();
        await heroCheckboxPage.checkbox1.check();
        await heroCheckboxPage.checkbox2.uncheck();
        await heroCheckboxPage.checkbox2.check();
        await heroCheckboxPage.checkbox2.uncheck();
        await expect(heroCheckboxPage.checkbox1, 'El checkbox no esta seleccionado').toBeChecked();
        await expect(heroCheckboxPage.checkbox2, 'El checkbox esta seleccionado').not.toBeChecked();
        })
})

test('Validacion de arastrar y soltar un elemento web en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y arrastro y suelto un elemento', async () => {
        const heroDragDropPage = new HeroKuappDragDropPage(page);
        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await expect(heroDragDropPage.titleLabel, 'El titulo no es correcto').toContainText('Drag and Drop');
        await page.locator('#column-a').dragTo(page.locator('#column-b'));
        })
})

test('Validacion de elemento Dropdown List en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y arrastro y suelto un elemento', async () => {
        const heroDropdownPage = new HeroKuappDropdownPage(page);
        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await expect(heroDropdownPage.titleLabel, 'El titulo no es correcto').toContainText('Dropdown List');
        await heroDropdownPage.dropdownElement.selectOption('Option 2')
        await expect(heroDropdownPage.dropdownElement, 'La opcion no es correcta').toContainText('Option 2');
        await heroDropdownPage.dropdownElement.selectOption('Option 1')
        await expect(heroDropdownPage.dropdownElement, 'La opcion no es correcta').toContainText('Option 1');
        })
})

test('Validacion de elementos dinamicos en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el comportamiento de los elementos dinamicos', async () => {
        const heroDynamicPage = new HeroKuappDynamicElementsPage(page);
        await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
        await expect(heroDynamicPage.titleLabel, 'El titulo no es correcto').toContainText('Dynamic Controls');
        await expect(heroDynamicPage.checkboxElement, 'El elemento no esta habilitado').toBeEnabled();
        await expect(heroDynamicPage.checkboxElement, 'El elemento no es visible').toBeVisible();
        await heroDynamicPage.removeElement.click();
        await expect(heroDynamicPage.goneLabel, 'El elemento no es visible').toBeVisible();
        await expect(heroDynamicPage.goneLabel, 'La etiqueta es correcta').toContainText("It's gone!");
        await heroDynamicPage.addElement.click();
        await expect(heroDynamicPage.backLabel, 'El elemento no es visible').toBeVisible();
        await expect(heroDynamicPage.backLabel, 'La etiqueta es correcta').toContainText("It's back!");
        await expect(heroDynamicPage.checkboxElement, 'El elemento no esta habilitado').toBeEnabled();
        await expect(heroDynamicPage.checkboxElement, 'El elemento no es visible').toBeVisible();
        await heroDynamicPage.checkboxElement.check();
        await expect(heroDynamicPage.textboxElement, 'El elemento esta habilitado').toBeDisabled();
        await heroDynamicPage.enableElement.click();
        await expect(heroDynamicPage.enableLabel, 'El elemento no es visible').toBeVisible();
        await expect(heroDynamicPage.enableLabel, 'La etiqueta es correcta').toContainText("It's enabled!");
        await expect(heroDynamicPage.textboxElement, 'El elemento no esta habilitado').toBeEnabled();
        await heroDynamicPage.disableElement.click();
        await expect(heroDynamicPage.disableLabel, 'El elemento no es visible').toBeVisible();
        await expect(heroDynamicPage.disableLabel, 'La etiqueta es correcta').toContainText("It's disabled!");
        await expect(heroDynamicPage.textboxElement, 'El elemento esta habilitado').toBeDisabled();
        })
})

test('Validacion de pantalla de carga en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar la barra de carga', async () => {
        const heroLoadPage = new HeroKuappLoadPage(page);
        await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
        await expect(heroLoadPage.titleLabel, 'El titulo no es correcto').toContainText('Dynamically Loaded Page Elements');
        await heroLoadPage.startButton.click();
        await expect(heroLoadPage.msgLabel, 'El elemento no es visible').toBeVisible({ timeout: 10_000 });
        await expect(heroLoadPage.msgLabel, 'El mensaje no es correcto').toContainText('Hello World!');
        })
})

test('Validacion de un pop up comercial en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar el comportamiento del pop up', async () => {
        const heroAdPage = new HeroKuappAdPage(page);
        await page.goto('https://the-internet.herokuapp.com/entry_ad');
        await expect(heroAdPage.titleLabel, 'El titulo no es correcto').toContainText('Entry Ad');
        await heroAdPage.closeOption.click()        
        await expect(heroAdPage.titleLabel, 'El titulo no es correcto').toContainText('Entry Ad');
        })
})

test('Validacion de descarga de un archivo en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar la descarga de un archivo', async () => {
        const heroDownloadPage = new HeroKuappDownloadPage(page);
        await page.goto('https://the-internet.herokuapp.com/download');
        await expect(heroDownloadPage.titleLabel, 'El titulo no es correcto').toContainText('File Downloader');
        await heroDownloadPage.downloadElement.click();
        })
})

test('Validacion de carga de un archivo en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar la carga de un archivo', async () => {
        const heroUploadPage = new HeroKuappUploadPage(page);
        await page.goto('https://the-internet.herokuapp.com/upload');
        await expect(heroUploadPage.titleLabel, 'El titulo no es correcto').toContainText('File Uploader');
        await heroUploadPage.selectFileButton.setInputFiles(path.join('C:/Users/diego/OneDrive/Escritorio/test.csv'));
        await heroUploadPage.uploadButton.click();
        await expect(heroUploadPage.uploadSuccessMsg, 'El mensaje no es correcto').toContainText('File Uploaded!');
        })
})

test('Validacion de menu flotante en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar que el menu flotante funciona', async () => {
        const heroFloatPage = new HeroKuappFloatingPage(page);
        await page.goto('https://the-internet.herokuapp.com/floating_menu');
        await expect(heroFloatPage.titleLabel, 'El titulo no es correcto').toContainText('Floating Menu');
        await page.evaluate(() => window.scrollTo(0, 1200));
        await heroFloatPage.homeMenu.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu#home');      
        await heroFloatPage.newsMenu.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu#news');    
        await heroFloatPage.contactMenu.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu#contact'); 
        await heroFloatPage.aboutMenu.click();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu#about');      
        })
})

test('Validacion de recuperacion de password en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el proceso de recuperar password', async () => {
        const heroForgotPage = new HeroKuappForgotPage(page);
        await page.goto('https://the-internet.herokuapp.com/forgot_password');
        await expect(heroForgotPage.titleLabel, 'El titulo no es correcto').toContainText('Forgot Password');
        await heroForgotPage.textboxPassword.fill('Testing@sample.com');
        await heroForgotPage.retrieveButton.click();
        await expect(heroForgotPage.errorLabel, 'El mensaje no es correcto').toContainText('Internal Server Error');
        })
})

test('Validacion de autenticacion en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el proceso de autenticacion exitosa y fallida', async () => {
        const heroLoginPage = new HeroKuappAuthPage(page);
        await page.goto('https://the-internet.herokuapp.com/login');
        await expect(heroLoginPage.titleLabel, 'El titulo no es correcto').toContainText('Login Page');
        await heroLoginPage.textboxUser.fill('test');
        await heroLoginPage.textboxPassword.fill('sample');
        await heroLoginPage.loginButton.click();
        await expect(heroLoginPage.userErrorMsg, 'El mensaje no es correcto').toContainText('Your username is invalid!');
        await heroLoginPage.textboxUser.fill('tomsmith');
        await heroLoginPage.textboxPassword.fill('sample');
        await heroLoginPage.loginButton.click();
        await expect(heroLoginPage.passErrorMsg, 'El mensaje no es correcto').toContainText('Your password is invalid!');
        await heroLoginPage.textboxUser.fill('tomsmith');
        await heroLoginPage.textboxPassword.fill('SuperSecretPassword!');
        await heroLoginPage.loginButton.click();
        await expect(heroLoginPage.successMsg, 'El mensaje no es correcto').toContainText('You logged into a secure area');
        await heroLoginPage.logoutButton.click();
        await expect(heroLoginPage.logoutMsg, 'El mensaje no es correcto').toContainText('You logged out of the secure');
        })
})

test('Validacion de frames en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar los frames', async () => {
        const heroFramesPage = new HeroKuappFramesPage(page);
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
        await expect(heroFramesPage.frameLeft.locator('body')).toHaveText('LEFT');
        await expect(heroFramesPage.frameRight.locator('body')).toHaveText('RIGHT');
        await expect(heroFramesPage.frameMiddle.locator('body')).toHaveText('MIDDLE');
        await expect(heroFramesPage.frameBottom.locator('body')).toHaveText('BOTTOM');
        })
})

test('Validacion de geolocation en la pagina de HeroKuapp', async ({ page, context }) => {
        await test.step('Ingreso a la pagina web y validar las coordenadas de geolocalizacion', async () => {
        const heroGeoPage = new HeroKuappGeolocationPage(page);
        await context.grantPermissions(['geolocation']);
        await context.setGeolocation({latitude: 19.2968346, longitude: -99.186086});
        await page.goto('https://the-internet.herokuapp.com/geolocation');
        await expect(heroGeoPage.titleLabel, 'El titulo no es correcto').toContainText('Geolocation');
        await heroGeoPage.locationButton.click()
        await expect(heroGeoPage.latitudeLabel, 'La coordenada no es correcta').toContainText('19.2');
        await expect(heroGeoPage.longitudeLabel, 'La coordenada no es correcta').toContainText('-99.1');
        })
})

test('Validacion de barra deslizante en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido el comportamiento de una barra slider', async () => {
        const heroSliderPage = new HeroKuappSliderPage(page);
        await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
        await expect(heroSliderPage.titleLabel, 'El titulo no es correcto').toContainText('Horizontal Slider');
        await heroSliderPage.sliderBar.click();
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('2.5');
        await heroSliderPage.sliderBar.press('ArrowUp');
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('3');
        await heroSliderPage.sliderBar.press('ArrowUp');
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('3.5');
        await heroSliderPage.sliderBar.press('ArrowUp');
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('4'); 
        await heroSliderPage.sliderBar.press('ArrowUp');
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('4.5');   
        await heroSliderPage.sliderBar.press('ArrowUp');
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('5');
        await heroSliderPage.sliderBar.press('ArrowDown');  
        await heroSliderPage.sliderBar.press('ArrowDown');  
        await heroSliderPage.sliderBar.press('ArrowDown');  
        await heroSliderPage.sliderBar.press('ArrowDown');  
        await heroSliderPage.sliderBar.press('ArrowDown');  
        await heroSliderPage.sliderBar.press('ArrowDown'); 
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('2'); 
        await heroSliderPage.sliderBar.press('ArrowDown'); 
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('1.5'); 
        await heroSliderPage.sliderBar.press('ArrowDown'); 
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('1'); 
        await heroSliderPage.sliderBar.press('ArrowDown'); 
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('0.5'); 
        await heroSliderPage.sliderBar.press('ArrowDown'); 
        await expect(heroSliderPage.sliderValue, 'El valor no es correcto').toContainText('0'); 
        })
})

test('Validacion de elementos ocultos en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar el nombre de las imagenes', async () => {
        const heroHoverPage = new HeroKuappHoverPage(page);
        await page.goto('https://the-internet.herokuapp.com/hovers');
        await expect(heroHoverPage.titleLabel, 'El titulo no es correcto').toContainText('Hovers');
        await expect(heroHoverPage.nameUser1Label, 'El nombre se esta mostrando').toBeHidden();
        await heroHoverPage.imageUser1.hover()
        await expect(heroHoverPage.nameUser1Label, 'El nombre no se esta mostrando').toBeVisible();
        await expect(heroHoverPage.nameUser1Label, 'El nombre no es correcto').toContainText('name: user1');
        await expect(heroHoverPage.nameUser2Label, 'El nombre se esta mostrando').toBeHidden();
        await heroHoverPage.imageUser2.hover()
        await expect(heroHoverPage.nameUser2Label, 'El nombre no se esta mostrando').toBeVisible();
        await expect(heroHoverPage.nameUser2Label, 'El nombre no es correcto').toContainText('name: user2');
        await expect(heroHoverPage.nameUser3Label, 'El nombre se esta mostrando').toBeHidden();
        await heroHoverPage.imageUser3.hover()
        await expect(heroHoverPage.nameUser3Label, 'El nombre no se esta mostrando').toBeVisible();
        await expect(heroHoverPage.nameUser3Label, 'El nombre no es correcto').toContainText('name: user3');
        })
})

test('Validacion de Inputs en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar el campo de inputs', async () => {
        const heroInputsPage = new HeroKuappInputsPage(page);
        await page.goto('https://the-internet.herokuapp.com/inputs');
        await expect(heroInputsPage.titleLabel, 'El titulo no es correcto').toContainText('Inputs');
        await heroInputsPage.inputTextbox.click()
        const times = 30;
        for (let i = 0; i < times; i++){
            await heroInputsPage.inputTextbox.press('ArrowUp');
        }
        for (let i = 15; i < times; i++){
            await heroInputsPage.inputTextbox.press('ArrowDown');
        }
        })
})

test('Validacion de menu en Jquery en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar el comportaminto del menu', async () => {
        const heroJqueryPage = new HeroKauppJqueryPage(page);
        await page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
        await expect(heroJqueryPage.titleLabel, 'El titulo no es correcto').toContainText('JQueryUI - Menu');
        await expect(heroJqueryPage.downloadOption, 'El elemento esta presente').toBeHidden()
        await heroJqueryPage.enabledOption.hover();
        await expect(heroJqueryPage.downloadOption, 'El elemento no esta presente').toBeVisible()
        await expect(heroJqueryPage.csvOption, 'El elemento esta presente').toBeHidden()
        await heroJqueryPage.downloadOption.hover();
        await expect(heroJqueryPage.csvOption, 'El elemento no esta presente').toBeVisible()
        await heroJqueryPage.csvOption.hover();
        })
})

test('Validacion de alerta tipo 1 en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar el comportaminto de alerta simple', async () => {
        const heroAlertPage = new HeroKuappAlertsPage(page);
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(heroAlertPage.titleLabel, 'El titulo no es correcto').toContainText('JavaScript Alerts');
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('I am a JS Alert');
        await dialog.accept();
        });
        await heroAlertPage.alert1.click();
        await expect(heroAlertPage.alertResult, 'El mensaje no es correcto').toContainText('You successfully clicked an alert');
        })
})

test('Validacion de alerta tipo 2 aceptado en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y acepto la alerta tipo 2', async () => {
        const heroAlertPage = new HeroKuappAlertsPage(page);
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(heroAlertPage.titleLabel, 'El titulo no es correcto').toContainText('JavaScript Alerts');
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.accept();
        });
        await heroAlertPage.alert2.click();
        await expect(heroAlertPage.alertResult, 'El mensaje no es correcto').toContainText('You clicked: Ok');
        })
})

test('Validacion de alerta tipo 2 cancelado en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y cancelo la alerta tipo 2', async () => {
        const heroAlertPage = new HeroKuappAlertsPage(page);
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(heroAlertPage.titleLabel, 'El titulo no es correcto').toContainText('JavaScript Alerts');
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('I am a JS Confirm');
        await dialog.dismiss();
        });
        await heroAlertPage.alert2.click();
        await expect(heroAlertPage.alertResult, 'El mensaje no es correcto').toContainText('You clicked: Cancel');
        })
})

test('Validacion de alerta tipo 3 prompt en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y escribo en la alerta tipo 3', async () => {
        const heroAlertPage = new HeroKuappAlertsPage(page);
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await expect(heroAlertPage.titleLabel, 'El titulo no es correcto').toContainText('JavaScript Alerts');
        page.on('dialog', async (dialog) => {
        expect(dialog.message()).toContain('I am a JS prompt');
        await dialog.accept('Test');
        });
        await heroAlertPage.alert3.click();
        await expect(heroAlertPage.alertResult, 'El mensaje no es correcto').toContainText('You entered: Test');
        })
})

test('Validacion de deteccion de teclas en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y escribo en la alerta tipo 3', async () => {
        const heroPressPage = new HeroKuappKeyPressPage(page);
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        await expect(heroPressPage.titleLabel, 'El titulo no es correcto').toContainText('Key Presses');
        await heroPressPage.keyTextBox.press('Backspace');
        await expect(heroPressPage.keyDetectedLabel, 'La tecla no es correcta').toHaveText('You entered: BACK_SPACE');
        await heroPressPage.keyTextBox.press('Tab');
        await expect(heroPressPage.keyDetectedLabel, 'La tecla no es correcta').toHaveText('You entered: TAB');
        await heroPressPage.keyTextBox.press('ArrowRight');
        await expect(heroPressPage.keyDetectedLabel, 'La tecla no es correcta').toHaveText('You entered: RIGHT');
        await heroPressPage.keyTextBox.press('ArrowLeft');
        await expect(heroPressPage.keyDetectedLabel, 'La tecla no es correcta').toHaveText('You entered: LEFT');
        })
})

test('Validacion de multi pestañas en la pagina de HeroKuapp', async ({ page, context }) => {
        await test.step('Ingreso a la pagina web y validar el comportamiento de multi pestañas', async () => {
        const heroMultiPage = new HeroKuappMultiTabPage(page);
        await page.goto('https://the-internet.herokuapp.com/windows');
        await expect(heroMultiPage.titleLabel, 'El titulo no es correcto').toContainText('Opening a new window');
        const pagePromise = context.waitForEvent('page');
        await heroMultiPage.openNewTab.click()
        const newPage = await pagePromise;
        await expect(newPage.getByRole('heading', { name: 'New Window' }), 'El titulo no es correcto').toContainText('New Window');
        await newPage.close();
        })
})

test('Validacion de doble notificacion en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar la notificacion', async () => {
        const heroNotiPage = new HeroKuappNotificationPage(page);
        await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
        await expect(heroNotiPage.titleLabel, 'El titulo no es correcto').toContainText('Notification Message');
        await heroNotiPage.showNotification.click();
        const textoNoti = await heroNotiPage.notificationLabel.textContent();
        console.log(textoNoti);
        if(textoNoti?.includes('success')) 
        {
        expect(textoNoti, 'La notificacion no es correcta').toContain("Action successful");
        } 
        else if(textoNoti?.includes('unsuccess')) 
        {
        expect(textoNoti, 'La notificacion no es correcta').toContain("Action unsuccessful");
        }
        })
})

test('Validacion de shadow DOM en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y validar elementos en shadow DOM', async () => {
        const heroShadowPage = new HeroKuappShadowPage(page);
        await page.goto('https://the-internet.herokuapp.com/shadowdom');
        await expect(heroShadowPage.titleLabel, 'El titulo no es correcto').toContainText('Simple template');
        await expect(heroShadowPage.firstLabel, 'El texto no es correcto').toContainText("Let's have some different text!");
        await expect(heroShadowPage.secondLabel, 'El texto no es correcto').toContainText("Let's have some different text!");
        await expect(heroShadowPage.thirdLabel, 'El texto no es correcto').toContainText('In a list!');
        })
})

test('Validacion de ordenado de tabla en la pagina de HeroKuapp', async ({ page }) => {
        await test.step('Ingreso a la pagina web y ordenar la tabla de datos', async () => {
        const heroTablePage = new HeroKuappTablesPage(page);
        await page.goto('https://the-internet.herokuapp.com/tables');
        await expect(heroTablePage.titleLabel, 'El titulo no es correcto').toContainText('Data Tables');
        await expect(heroTablePage.lastNameFieldT1, 'El campo no es correcto').toContainText('Smith');
        await expect(heroTablePage.firstNameFieldT1, 'El campo no es correcto').toContainText('John');
        await expect(heroTablePage.lastNameFieldT2, 'El campo no es correcto').toContainText('Smith');
        await expect(heroTablePage.firstNameFieldT2, 'El campo no es correcto').toContainText('John');
        await heroTablePage.firstNameTable1.click();
        await heroTablePage.lastNameTable1.click();
        await heroTablePage.firstNameTable2.click();
        await heroTablePage.lastNameTable2.click();
        await expect(heroTablePage.lastNameFieldT1, 'El campo no es correcto').toContainText('Smith');
        await expect(heroTablePage.firstNameFieldT1, 'El campo no es correcto').toContainText('John');
        await expect(heroTablePage.lastNameFieldT2, 'El campo no es correcto').toContainText('Smith');
        await expect(heroTablePage.firstNameFieldT2, 'El campo no es correcto').toContainText('John');
        })
})

test('Validacion de click derecho en la pagina HeroKuapp Context Menu', async ({ page }) => {
        await test.step('Ingreso a la pagina web y valido un click derecho', async () => {
        const heroRightClickPage = new HeroKuappRightClickPage(page);
        await page.goto('https://the-internet.herokuapp.com/context_menu');
        await expect(heroRightClickPage.titleLabel, 'El titulo no es correcto').toContainText('Context Menu');
        page.on('dialog', async (dialog) => { 
        expect(dialog.message()).toContain('You selected a context menu');
        await dialog.accept();        
        });
        await heroRightClickPage.clickArea.click({ button: 'right' });
        })
})

})