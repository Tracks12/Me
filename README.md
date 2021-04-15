# Site Portfolio 2018

## **[floriancardinal.000webhostapp.com](https://floriancardinal.000webhostapp.com/)**

---

## **Dependencies**

### Front (Styles & Scripts)

| Librairies / API's                                                                        | version |
| ----------------------------------------------------------------------------------------- | ------- |
| [Font Awesome](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) | 4.7.0   |
| [JQuery](https://api.jquery.com/)                                                         | 3.3.1   |
| [ParticulesJS](https://github.com/VincentGarreau/particles.js/)                           | 2.0.0   |

### Fonts

- [Lato](http://www.latofonts.com/lato-free-fonts/)
- [Monospace](https://fontmeme.com/polices/police-monospace/)

---

## **MVC Resources**

### Source files in `/core/`

- controllers resources: `/core/controllers/`
- models resources (data binding): `/core/models/`
- views resources: `/core/views/`

### Routing

- HTTP Request: `/core/HTTPRoute.php`
- XHR Request: `/core/XHRRoute.php`

### Other Modules

- Data Base connection: `/core/connect.php`
- Injection Verification & Protection: `/core/services.php`

### Database connection

After cloning the repository **you need to create the database json config file in the `/core/constants` directory which will be called `config.json` with inside**:

```json
{
	"database": {
		"host": "localhost",
		"name": "id8823866_cv",
		"char": "utf8",
		"user": "id8823866_root",
		"pass": "~75rRTijOvE<bkte"
	}
}
```

**Don't forget to import the `cv.sql` file into your database !**

---

## **Last Updates**

### Apr 28, 2020

- Dynamic theme
- Script fixed
- Update documentation updates

### Mar 23, 2020

- Explode all index views
- Php script fixed
- Style root var added
- Prepare css dynamic theme
- Data base update
- Add folder for assets
- Apply MVC architecture

### Sep 3, 2019

- Update php contact script
- Delete parasitic files
- Update portfolio link documentation
