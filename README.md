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

After cloning the repository **you need to create the database connection file in the `/core` directory which will be called `connect.php` with inside**:

```php
class bdd {
	/**
	 * disconnect to the database
	 * @return void
	 */
	public static function disconnect(): void {
		self::$bdd['db'] = NULL;
		return;
	}

	/**
	 * connect to the database
	 * @return object[PDO] database object
	 */
	public static function connect(): PDO {
		try {
			self::$bdd['db'] = new PDO(
				'mysql:host='.self::$bdd['host'].'; dbname='.self::$bdd['name'].'; charset='.self::$bdd['char'],
				self::$bdd['user'],
				self::$bdd['pass'],
				[ PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING ]
			);
		}

		catch(Exception $e) {
			die("[Err]:[{$e->getmessage()}]");
		}

		return self::$bdd['db'];
	}

	// Data Base auth fields
	private static $bdd = [
		"db"   => NULL,
		"host" => "...",
		"name" => "...",
		"char" => "utf8",
		"user" => "...",
		"pass" => "..."
	];
}
```

**Don't forget to import the `capteur.sql` file into your database !**

---

## **To do list**

- [ ] ...

---

## Dernière MàJ

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
