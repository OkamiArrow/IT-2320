var Main = {};

Main.Show = function(showName)
	{
		this.ShowName = showName;
		
		this.GetShowName = function()
		{
			return this.ShowName;
		}
	}

Main.Person = function(firstName, lastName, Age, hairColor, Importance)
	{
		this.FirstName = firstName;
		this.LastName = lastName;
		this.Age = Age;
		this.HairColor = hairColor;
		this.Importance = Importance;
		
		this.SetFirstName = function(name)
	{
		this.FirstName = name;
	}
		
		this.GetEverything = function()
	{
		return this.FirstName + "" + this.LastName + "***" + "Age: " + this.Age + "***" + " Hair Color: " + this.HairColor + "***" +
		" Importance Level: " + this.Importance;
	}
	
	}
	
	Main.Person.prototype.GetFirstName = function()
	{
		return this.FirstName;
	}
	
	Main.Person.prototype.GetFullName = function()
	{
		return this.FirstName + "" + this.LastName;
	}
	
	Main.Person.prototype.GetAge = function()
	{
		return this.Age;
	}
	
	Main.Person.prototype.GetHairColor = function()
	{
		return this.HairColor;
	}
	
	Main.Person.prototype.GetImportance = function()
	{
		return this.Importance;
	}
	
	/*******************************************************************************************/
	
	Main.Anime = new Main.Show ("Naruto");
	
	/*******************************************************************************************/
	
	Main.Naruto = new Main.Person ("Naruto ", "Uzumaki ", 17, " Yellow ", "Main Character!");
	
	Main.Pink = new Main.Person("Pink ", "Haruna ", 16 , " Pink ", "Lead Female Character");
	
	Main.Sasuke = new Main.Person("Sasuke ", "Uchiha ", 17 , " Black", " Main Antagonist");
	
	Main.White = new Main.Person("White ", "Hatake ", 27 , " White", " Leader/Teacher");
	
	Main.Itachi = new Main.Person("Itachi", " Uchiha ", 23, " Black ", " Genius Prodigy");
	
	Main.Orochimaru = new Main.Person("Orochimaru ", " Unknown ", 50 , " Black ", " Immortal..sort of");
	
	Main.Hinata = new Main.Person("Hinata ", "Hyuga ",  17, " Black", " Lead Female Character for love interest");
	
	/********************************************************************************************/
	
	Main.Pink.SetFirstName("Sakura");
	
	Main.White.SetFirstName("Kakashi");
	
	/********************************************************************************************/

	document.body.innerHTML = Main.Naruto.GetEverything();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.Pink.GetFirstName();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.Sasuke.GetEverything();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.White.GetFirstName();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.Itachi.GetEverything();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.Orochimaru.GetFullName();
	
	document.body.innerHTML += "<br/><br/>";
	
	document.body.innerHTML += Main.Hinata.GetEverything();
	
	
	
	
	
	