$(document).ready(function() {
  'use strict';

  var data = { // must use single quotes because some names have a single quote and/or . e.g. T.Y. Hilton or Le'veon Bell
    'Ravens': null,
    'Bengals': null,
    'Steelers': null,
    'Bears': null,
    'Lions': null,
    'Packers': null,
    'Vikings': null,
    'Texans': null,
    'Colts': null,
    'Jaguars': null,
    'Titans': null,
    'Falcons': null,
    'Panthers': null,
    'Saints': null,
    'Buccaneers': null,
    'Bills': null,
    'Dolphins': null,
    'Patriots': null,
    'Jets': null,
    'Cowboys': null,
    'Giants': null,
    'Eagles': null,
    'Redskins': null,
    'Broncos': null,
    'Chiefs': null,
    'Raiders': null,
    'Chargers': null,
    'Cardinals': null,
    '49ers': null,
    'Seahawks': null,
    'Rams': null,
    'Browns': null,
    'Jared Abbrederis': null,
    'Ameer Abdullah': null,
    'Corey Acosta': null,
    'Vernon Adams Jr.': null,
    'Davante Adams': null,
    'Jerell Adams': null,
    'Bralon Addison': null,
    'Nelson Agholor': null,
    'Ray Agnew': null,
    'Roberto Aguayo': null,
    'Kamar Aiken': null,
    'Jay Ajayi': null,
    'Seyi Ajirotutu': null,
    'Mario Alford': null,
    'Brandon Allen': null,
    'Davonte Allen': null,
    'Dwayne Allen': null,
    'Javorius Allen': null,
    'Keenan Allen': null,
    'RaShaun Allen': null,
    'Torrence Allen': null,
    'Geronimo Allison': null,
    'Jace Amaro': null,
    'Danny Amendola': null,
    'C.J. Anderson': null,
    'Derek Anderson': null,
    'Dres Anderson': null,
    'Joe Anderson': null,
    'Robby Anderson': null,
    'Rory Anderson': null,
    'Stephen Anderson': null,
    'Antonio Andrews': null,
    'Blake Annen': null,
    'Danny Anthrop': null,
    'Ryan Aplin': null,
    'Dri Archer': null,
    'R.J. Archer': null,
    'Cameron Artis-Payne': null,
    'Matt Asiata': null,
    'George Atkinson': null,
    'Damarr Aultman': null,
    'David Ausberry': null,
    'Miles Austin': null,
    'Tavon Austin': null,
    'Jason Avant': null,
    'DeMarcus Ayers': null,
    'Kennard Backman': null,
    'Dan Bailey': null,
    'Rasheed Bailey': null,
    'Stedman Bailey': null,
    'Edwin Baker': null,
    'Jared Baker': null,
    'Doug Baldwin': null,
    'Montee Ball': null,
    'Vick Ballard': null,
    'Joe Banyard': null,
    'Peyton Barber': null,
    'Brandon Barden': null,
    'Matt Barkley': null,
    'Kenjon Barner': null,
    'Gary Barnidge': null,
    'Connor Barth': null,
    'Phil Bates': null,
    'Alex Bayer': null,
    'Cole Beasley': null,
    'Bobo Beathard': null,
    'Odell Beckham': null,
    'Travis Beckum': null,
    'Blake Bell': null,
    'Devon Bell': null,
    'Joique Bell': null,
    'Kenny Bell': null,
    'Le\'Veon Bell': null,
    'Reggie Bell': null,
    'Josh Bellamy': null,
    'Kelvin Benjamin': null,
    'Travis Benjamin': null,
    'Arrelious Benn': null,
    'Martellus Bennett': null,
    'Michael Bennett': null,
    'Mike Bercovici': null,
    'Sam Bergen': null,
    'Justin Berger': null,
    'Giovani Bernard': null,
    'Brenton Bersin': null,
    'Taylor Bertolet': null,
    'McLeod Bethel-Thompson': null,
    'E.J. Bibbs': null,
    'Kapri Bibbs': null,
    'Jace Billingsley': null,
    'Harvey Binford': null,
    'Justin Blackmon': null,
    'Emory Blake': null,
    'Issac Blakeney': null,
    'Matt Blanchard': null,
    'Rob Blanchflower': null,
    'LeGarrette Blount': null,
    'Alfred Blue': null,
    'Javess Blue': null,
    'Moritz Boehringer': null,
    'Brandon Bogotay': null,
    'Tommy Bohanon': null,
    'Brandon Bolden': null,
    'Anquan Boldin': null,
    'Alan Bonner': null,
    'Andrew Bonnet': null,
    'Devontae Booker': null,
    'Kadron Boone': null,
    'Zach Boren': null,
    'Blake Bortles': null,
    'Brandon Bostick': null,
    'Chris Boswell': null,
    'Dwayne Bowe': null,
    'Braedon Bowman': null,
    'Josh Boyce': null,
    'Tyler Boyd': null,
    'Jarrett Boykin': null,
    'Trevone Boykin': null,
    'Nick Boyle': null,
    'Sam Bradford': null,
    'Ahmad Bradshaw': null,
    'Tom Brady': null,
    'Cameron Brate': null,
    'Ben Braunecker': null,
    'Daniel Braverman': null,
    'Quan Bray': null,
    'Tyler Bray': null,
    'Drew Brees': null,
    'K.J. Brent': null,
    'Brandon Bridge': null,
    'Teddy Bridgewater': null,
    'Kyle Brindza': null,
    'Jacoby Brissett': null,
    'Kenny Britt': null,
    'Kevin Brock': null,
    'Richie Brockel': null,
    'Demitrius Bronson': null,
    'Zac Brooks': null,
    'Antonio Brown': null,
    'Bryce Brown': null,
    'Chris Brown': null,
    'Corey Brown': null,
    'Da\'Ron Brown': null,
    'DaRon Brown': null,
    'Daniel Brown': null,
    'Donald Brown': null,
    'Jaron Brown': null,
    'John Brown': null,
    'Jon Brown': null,
    'Josh Brown': null,
    'Mack Brown': null,
    'Malcolm Brown': null,
    'Marlon Brown': null,
    'Mike Brown': null,
    'Tim Brown': null,
    'Vincent Brown': null,
    'Brandon Brown-Dukes': null,
    'Benson Browne': null,
    'Ryan Broyles': null,
    'Dez Bryant': null,
    'Martavis Bryant': null,
    'Matt Bryant': null,
    'Randy Bullock': null,
    'Quenton Bundrage': null,
    'Marquis Bundy': null,
    'Aaron Burbridge': null,
    'Rex Burkhead': null,
    'Brandon Burks': null,
    'Isaiah Burse': null,
    'Michael Burton': null,
    'Trey Burton': null,
    'Reggie Bush': null,
    'Brice Butler': null,
    'Jeremy Butler': null,
    'Damiere Byrd': null,
    'LaRon Byrd': null,
    'Travaris Cadet': null,
    'Devon Cajuste': null,
    'Andre Caldwell': null,
    'Joe Callahan': null,
    'Jordan Cameron': null,
    'Michael Campanaro': null,
    'DiAndre Campbell': null,
    'Jordan Campbell': null,
    'Michael Campbell': null,
    'Anthony Cantele': null,
    'Avius Capers': null,
    'Ka\'Deem Carey': null,
    'Amir Carlisle': null,
    'Dan Carpenter': null,
    'Derek Carr': null,
    'Derek Carrier': null,
    'Leonte Carroo': null,
    'Tra Carson': null,
    'DeAndre Carter': null,
    'Duron Carter': null,
    'Kyle Carter': null,
    'Kivon Cartwright': null,
    'James Casey': null,
    'Matt Cassel': null,
    'B.J. Catalon': null,
    'Chandler Catanzaro': null,
    'Rashon Ceaser': null,
    'Brent Celek': null,
    'Garrett Celek': null,
    'Gary Chambers': null,
    'Brelan Chancellor': null,
    'Scott Chandler': null,
    'Jamaal Charles': null,
    'Orson Charles': null,
    'John Chiles': null,
    'Jawon Chisholm': null,
    'Alex Chisum': null,
    'Gerald Christian': null,
    'DeVonte Christopher': null,
    'Jimmy Clausen': null,
    'Charles Clay': null,
    'Kaelin Clay': null,
    'Cameron Clear': null,
    'Kellen Clemens': null,
    'Asante Cleveland': null,
    'Tyler Clutts': null,
    'Danny Coale': null,
    'Sammie Coates': null,
    'David Cobb': null,
    'Randall Cobb': null,
    'Terrance Cobb': null,
    'Henry Krieger Coble': null,
    'Chase Coffman': null,
    'Jake Coker': null,
    'Brandon Coleman': null,
    'Corey Coleman': null,
    'Derrick Coleman': null,
    'Tevin Coleman': null,
    'Alex Collins': null,
    'Dobson Collins': null,
    'Marques Colston': null,
    'Kain Colter': null,
    'Kevin Cone': null,
    'Chris Conley': null,
    'John Conner': null,
    'Dan Conroy': null,
    'Connor Cook': null,
    'Jared Cook': null,
    'Kenny Cook': null,
    'Brandin Cooks': null,
    'Travis Coons': null,
    'Amari Cooper': null,
    'Michael Cooper': null,
    'Pharoh Cooper': null,
    'Riley Cooper': null,
    'Damian Copeland': null,
    'J.C. Copeland': null,
    'Marshaun Coprich': null,
    'Cody Core': null,
    'Jerricho Cotchery': null,
    'Brandon Cottom': null,
    'Kirk Cousins': null,
    'Michael Cox': null,
    'Michael Crabtree': null,
    'Tom Crabtree': null,
    'Brad Craddock': null,
    'Juron Criner': null,
    'John Crockett': null,
    'Mason Crosby': null,
    'Alan Cross': null,
    'Jamison Crowder': null,
    'Isaiah Crowell': null,
    'A.J. Cruz': null,
    'Victor Cruz': null,
    'Jeff Cumberland': null,
    'Billy Cundiff': null,
    'Benny Cunningham': null,
    'Jerome Cunningham': null,
    'Justice Cunningham': null,
    'Jay Cutler': null,
    'Zach D\'Orazio': null,
    'Anthony Dable': null,
    'Andy Dalton': null,
    'Jared Dangerfield': null,
    'Chase Daniel': null,
    'B.J. Daniels': null,
    'DaVaris Daniels': null,
    'Owen Daniels': null,
    'Orleans Darkwa': null,
    'Andre Davis': null,
    'Austin Davis': null,
    'Devante Davis': null,
    'Geremy Davis': null,
    'Jace Davis': null,
    'Kellen Davis': null,
    'Knile Davis': null,
    'Mike Davis': null,
    'Quinshad Davis': null,
    'Titus Davis': null,
    'Trevor Davis': null,
    'Tyler Davis': null,
    'Vernon Davis': null,
    'Phil Dawson': null,
    'Braxton Deaver': null,
    'Andre Debose': null,
    'Eric Decker': null,
    'Anthony Denham': null,
    'A.J. Derby': null,
    'Seth Devalve': null,
    'James Develin': null,
    'Pat Devlin': null,
    'Patrick DiMarco': null,
    'Dorin Dickerson': null,
    'Ed Dickson': null,
    'Reggie Diggs': null,
    'Stefon Diggs': null,
    'Anthony Dixon': null,
    'Chase Dixon': null,
    'Kenneth Dixon': null,
    'Mandel Dixon': null,
    'Aaron Dobson': null,
    'Josh Doctson': null,
    'Kenzel Doe': null,
    'Larry Donnell': null,
    'Phillip Dorsett': null,
    'Tandon Doss': null,
    'Brandon Doughty': null,
    'Harry Douglas': null,
    'Jack Doyle': null,
    'Kenyan Drake': null,
    'Shaun Draughn': null,
    'Jim Dray': null,
    'Jeff Driskel': null,
    'Thomas Duarte': null,
    'Lance Dunbar': null,
    'Kieren Duncan': null,
    'Reggie Dunn': null,
    'Kris Durham': null,
    'Donteea Dye': null,
    'Michael Dyer': null,
    'Zac Dysert': null,
    'Ed Eagan': null,
    'Marcus Easley': null,
    'Eric Ebron': null,
    'Clayton Echard': null,
    'Julian Edelman': null,
    'Ben Edwards': null,
    'Jahwan Edwards': null,
    'Trent Edwards': null,
    'Michael Egnew': null,
    'Tyler Eifert': null,
    'Andre Ellington': null,
    'Bruce Ellington': null,
    'Ezekiel Elliott': null,
    'Alex Ellis': null,
    'Rhett Ellison': null,
    'Quincy Enunwa': null,
    'Alex Erickson': null,
    'Zach Ertz': null,
    'Tyler Ervin': null,
    'Gavin Escobar': null,
    'Mike Evans': null,
    'Shaq Evans': null,
    'Ka\'imi Fairbairn': null,
    'Cody Fajardo': null,
    'David Fales': null,
    'George Farmer': null,
    'Kenneth Farrow': null,
    'Anthony Fasano': null,
    'Joseph Fauria': null,
    'Daniel Fells': null,
    'Darren Fells': null,
    'Jerome Felton': null,
    'Anthony Fera': null,
    'Isiah Ferguson': null,
    'Josh Ferguson': null,
    'Sam Ficken': null,
    'C.J. Fiedorowicz': null,
    'Larry Fitzgerald': null,
    'Ryan Fitzpatrick': null,
    'Joe Flacco': null,
    'Coby Fleener': null,
    'Malcom Floyd': null,
    'Michael Floyd': null,
    'David Fluellen': null,
    'Matt Flynn': null,
    'Nick Foles': null,
    'Nick Folk': null,
    'Kai Forbath': null,
    'Chase Ford': null,
    'Jacoby Ford': null,
    'Michael Ford': null,
    'Justin Forsett': null,
    'Matt Forte': null,
    'Arian Foster': null,
    'D.J. Foster': null,
    'Donte Foster': null,
    'Bennie Fowler': null,
    'Jalston Fowler': null,
    'Deshon Foxx': null,
    'Andrew Franks': null,
    'Mose Frazier': null,
    'Devonta Freeman': null,
    'Josh Freeman': null,
    'Blake Frohnapfel': null,
    'Isaac Fruechte': null,
    'Adam Fuehne': null,
    'Corey Fuller': null,
    'Devin Fuller': null,
    'Jeff Fuller': null,
    'Will Fuller': null,
    'Devin Funchess': null,
    'Andrew Furney': null,
    'Blaine Gabbert': null,
    'Taylor Gabriel': null,
    'Tyler Gaffney': null,
    'Jeremy Gallon': null,
    'Graham Gano': null,
    'Pierre Garcon': null,
    'Beau Gardner': null,
    'Manasseh Garner': null,
    'Jimmy Garoppolo': null,
    'Keyarris Garrett': null,
    'Kendall Gaskins': null,
    'Antonio Gates': null,
    'Clyde Gates': null,
    'Rico Gathers': null,
    'Jordan Gay': null,
    'Toby Gerhart': null,
    'Brandon Gibson': null,
    'Garrett Gilbert': null,
    'Mike Gillislee': null,
    'Crockett Gillmore': null,
    'Ted Ginn': null,
    'Chris Givens': null,
    'Andrew Gleichert': null,
    'Mike Glennon': null,
    'David Glidden': null,
    'Jared Goff': null,
    'Brittan Golden': null,
    'Antwan Goodley': null,
    'Mike Goodson': null,
    'C.J. Goodwin': null,
    'Marquise Goodwin': null,
    'Dillon Gordon': null,
    'Josh Gordon': null,
    'Melvin Gordon': null,
    'Richard Gordon': null,
    'Frank Gore': null,
    'Stephen Gostkowski': null,
    'Robbie Gould': null,
    'Bruce Gradkowski': null,
    'Chris Gragg': null,
    'Garrett Graham': null,
    'Jimmy Graham': null,
    'Shayne Graham': null,
    'T.J. Graham': null,
    'Antwane Grant': null,
    'Corey Grant': null,
    'Jakeem Grant': null,
    'Ryan Grant': null,
    'Cyrus Gray': null,
    'Johnathan Gray': null,
    'Jonas Gray': null,
    'MarQueis Gray': null,
    'Garrett Grayson': null,
    'A.J. Green': null,
    'Aaron Green': null,
    'Alex Green': null,
    'Ladarius Green': null,
    'Virgil Green': null,
    'Dorial Green-Beckham': null,
    'Kevin Greene': null,
    'Rashad Greene': null,
    'Jermaine Gresham': null,
    'Marion Grice': null,
    'Robert Griffin III': null,
    'Garrett Griffin': null,
    'Ryan Griffin': null,
    'Ryan Griffin': null,
    'Xavier Grimble': null,
    'Jonathan Grimes': null,
    'David J. Grinnage': null,
    'Darion Griswold': null,
    'Glenn Gronkowski': null,
    'Rob Gronkowski': null,
    'Rex Grossman': null,
    'Todd Gurley': null,
    'Christian Hackenberg': null,
    'Saalim Hakim': null,
    'Marvin Hall': null,
    'Rannell Hall': null,
    'C.J. Ham': null,
    'Cobi Hamilton': null,
    'Ray Hamilton': null,
    'Connor Hamlett': null,
    'Je\'Ron Hamm': null,
    'Frankie Hammond': null,
    'Leonard Hankerson': null,
    'James Hanna': null,
    'Russell Hansbrough': null,
    'Joe Hansley': null,
    'Clay Harbor': null,
    'Justin Hardy': null,
    'Cory Harkey': null,
    'Chris Harper': null,
    'Chris Harper': null,
    'Josh Harper': null,
    'Kenneth Harper': null,
    'Alonzo Harris': null,
    'Demetrius Harris': null,
    'DuJuan Harris': null,
    'Dwayne Harris': null,
    'Josh Harris': null,
    'Marcus Harris': null,
    'Maurice Harris': null,
    'Montel Harris': null,
    'R.J. Harris': null,
    'Dee Hart': null,
    'Garrett Hartley': null,
    'Brian Hartline': null,
    'Mario Harvey': null,
    'Travis Harvey': null,
    'Percy Harvin': null,
    'Nick Harwell': null,
    'Matt Hasselbeck': null,
    'Steven Hauschka': null,
    'Andrew Hawkins': null,
    'Charles Hawkins': null,
    'Jarryd Hayne': null,
    'Matt Hazel': null,
    'Jake Heaps': null,
    'Taylor Heinicke': null,
    'Cooper Helfet': null,
    'Roy Helu': null,
    'Junior Hemingway': null,
    'Temarrick Hemingway': null,
    'Chad Henne': null,
    'Derrick Henry': null,
    'Hunter Henry': null,
    'Mitchell Henry': null,
    'Javontee Herndon': null,
    'Dan Herron': null,
    'Robert Herron': null,
    'Devin Hester': null,
    'Jeff Heuerman': null,
    'Ryan Hewitt': null,
    'Darrius Heyward-Bey': null,
    'Tyler Higbee': null,
    'Rashard Higgins': null,
    'Tim Hightower': null,
    'Austin Hill': null,
    'Bronson Hill': null,
    'Jeremy Hill': null,
    'Josh Hill': null,
    'Michael Hill': null,
    'Shaun Hill': null,
    'Stephen Hill': null,
    'Tyreek Hill': null,
    'Kenny Hilliard': null,
    'Peyton Hillis': null,
    'Ronnie Hillman': null,
    'T.Y. Hilton': null,
    'Zach Hocker': null,
    'Chris Hogan': null,
    'Kevin Hogan': null,
    'Trindon Holliday': null,
    'Andre Holmes': null,
    'Gabe Holmes': null,
    'Johnny Holton': null,
    'J.P. Holtz': null,
    'Michael Hoomanawanui': null,
    'Austin Hooper': null,
    'DeAndre Hopkins': null,
    'Dustin Hopkins': null,
    'Reece Horn': null,
    'Sione Houma': null,
    'Rob Housler': null,
    'Stephen Houston': null,
    'Jordan Howard': null,
    'Brian Hoyer': null,
    'Chris Hubert': null,
    'Josh Huff': null,
    'Gabe Hughes': null,
    'Robert Hughes': null,
    'Adam Humphries': null,
    'Brett Hundley': null,
    'Akeem Hunt': null,
    'Justin Hunter': null,
    'Kendall Hunter': null,
    'Montario Hunter': null,
    'Allen Hurns': null,
    'Carlos Hyde': null,
    'Henry Hynoski': null,
    'Emil Igwenagu': null,
    'Mark Ingram': null,
    'Kendrick Ings': null,
    'Dontrelle Inman': null,
    'Joey Iosefa': null,
    'Chris Ivory': null,
    'Darius Jackson': null,
    'DeSean Jackson': null,
    'Don Jackson': null,
    'Fred Jackson': null,
    'Jerrell Jackson': null,
    'Steven Jackson': null,
    'Tarvaris Jackson': null,
    'Vincent Jackson': null,
    'Chuck Jacobs': null,
    'Nic Jacobs': null,
    'Jesse James': null,
    'LaMichael James': null,
    'Mike James': null,
    'Paul James': null,
    'Sebastian Janikowski': null,
    'Jeff Janis': null,
    'Andy Janovich': null,
    'Josh Jarboe': null,
    'Alshon Jeffery': null,
    'A.J. Jenkins': null,
    'Greg Jenkins': null,
    'Darius Jennings': null,
    'Greg Jennings': null,
    'Rashad Jennings': null,
    'Marcel Jensen': null,
    'Jerrel Jernigan': null,
    'Andre Johnson': null,
    'Austin Johnson': null,
    'Brandon Johnson': null,
    'Charles Johnson': null,
    'Chris Johnson': null,
    'Daje Johnson': null,
    'Damaris Johnson': null,
    'David Johnson': null,
    'David Johnson': null,
    'Derrick Johnson': null,
    'Devon Johnson': null,
    'Duke Johnson': null,
    'Gus Johnson': null,
    'Jamel Johnson': null,
    'Jerrod Johnson': null,
    'Josh Johnson': null,
    'Malcolm Johnson': null,
    'Marcus Johnson': null,
    'Matt Johnson': null,
    'Michael Johnson': null,
    'Steve Johnson': null,
    'Storm Johnson': null,
    'Will Johnson': null,
    'Andy Jones': null,
    'Cardale Jones': null,
    'Cayleb Jones': null,
    'Christion Jones': null,
    'Dominique Jones': null,
    'Greg Jones': null,
    'Jacoby Jones': null,
    'Jamaal Jones': null,
    'James Jones': null,
    'Julio Jones': null,
    'Landry Jones': null,
    'Malachi Jones': null,
    'Marvin Jones': null,
    'Matt Jones': null,
    'Seantavius Jones': null,
    'T.J. Jones': null,
    'Taiwan Jones': null,
    'Tevin Jones': null,
    'Maurice Jones-Drew': null,
    'Kyle Juszczyk': null,
    'Colin Kaepernick': null,
    'Mike Kafka': null,
    'Nick Kasa': null,
    'Jermaine Kearse': null,
    'Derek Keaton': null,
    'Case Keenum': null,
    'Travis Kelce': null,
    'Rob Kelley': null,
    'Anthony Kelly': null,
    'Lance Kendricks': null,
    'Malcome Kennedy': null,
    'Jeremy Kerley': null,
    'Joe Kerridge': null,
    'Cody Kessler': null,
    'Eric Kettani': null,
    'Chris King': null,
    'Tavarres King': null,
    'G.J. Kinne': null,
    'Collin Klein': null,
    'Marshall Koehn': null,
    'Ben Koyack': null,
    'Jonathan Krause': null,
    'Tyler Kroft': null,
    'John Kuhn': null,
    'Jake Kumerow': null,
    'Matt LaCosse': null,
    'Brandon LaFell': null,
    'Travis Labhart': null,
    'Eddie Lacy': null,
    'Josh Lambo': null,
    'Jake Lampman': null,
    'Jarvis Landry': null,
    'Jorvorskie Lane': null,
    'Cedrick Lang': null,
    'Paul Lang': null,
    'Jeremy Langford': null,
    'Ryan Lankford': null,
    'Daniel Lasco': null,
    'Paul Lasike': null,
    'Zach Laskey': null,
    'Cody Latimer': null,
    'Kenny Lawler': null,
    'Rashad Lawrence': null,
    'Dan LeFevour': null,
    'Marcus Leak': null,
    'Jay Lee': null,
    'Khari Lee': null,
    'Marqise Lee': null,
    'Matt Lengel': null,
    'Josh Lenz': null,
    'Brian Leonard': null,
    'Brian Leonhardt': null,
    'Jordan Leslie': null,
    'Dezmin Lewis': null,
    'Dion Lewis': null,
    'Lance Lewis': null,
    'Marcedes Lewis': null,
    'Roger Lewis': null,
    'Thad Lewis': null,
    'Tommylee Lewis': null,
    'Joe Licata': null,
    'Dan Light': null,
    'Ryan Lindley': null,
    'Zach Line': null,
    'Kolby Listenbee': null,
    'Greg Little': null,
    'Seth Lobato': null,
    'Colin Lockett': null,
    'Tyler Lockett': null,
    'Ricardo Lockette': null,
    'Deon Long': null,
    'Ty Long': null,
    'Erik Lorig': null,
    'Ricardo Louis': null,
    'Corbin Louks': null,
    'Marcus Lucas': null,
    'Devin Lucien': null,
    'Andrew Luck': null,
    'Donatella Luckett': null,
    'Luke Lundy': null,
    'John Lunsford': null,
    'Gavin Lutman': null,
    'Will Lutz': null,
    'Arthur Lynch': null,
    'Marshawn Lynch': null,
    'Paxton Lynch': null,
    'Jeremy Maclin': null,
    'Tre Madden': null,
    'Jeff Maehl': null,
    'Terrence Magee': null,
    'Ben Malena': null,
    'Ryan Malleck': null,
    'Ryan Mallett': null,
    'Steve Maneri': null,
    'Chris Manhertz': null,
    'Eli Manning': null,
    'Mario Manningham': null,
    'Sean Mannion': null,
    'EJ Manuel': null,
    'Johnny Manziel': null,
    'Marc Mariani': null,
    'Marcus Mariota': null,
    'Bradley Marquez': null,
    'Brandon Marshall': null,
    'Byron Marshall': null,
    'Cameron Marshall': null,
    'Jalin Marshall': null,
    'Keith Marshall': null,
    'Doug Martin': null,
    'Keshawn Martin': null,
    'Ross Martin': null,
    'Freddie Martino': null,
    'Tre Mason': null,
    'Mitch Mathews': null,
    'Ryan Mathews': null,
    'Chris Matthews': null,
    'Jordan Matthews': null,
    'Rishard Matthews': null,
    'Jacob Maxwell': null,
    'K.J. Maye': null,
    'Vince Mayle': null,
    'Miguel Maysonet': null,
    'Tre McBride': null,
    'Max McCaffrey': null,
    'AJ McCarron': null,
    'Dexter McCluster': null,
    'Ben McCord': null,
    'Josh McCown': null,
    'Luke McCown': null,
    'Anthony McCoy': null,
    'Colt McCoy': null,
    'LeSean McCoy': null,
    'Vance McDonald': null,
    'Tanner McEvoy': null,
    'Darren McFadden': null,
    'M.J. McFarland': null,
    'Mike McFarland': null,
    'Jake McGee': null,
    'Matt McGloin': null,
    'Sean McGrath': null,
    'Mekale McKay': null,
    'Jerick McKinnon': null,
    'J.D. McKissic': null,
    'Brandon McManus': null,
    'Douglas McNeil': null,
    'Paul McRoberts': null,
    'Robert Meachem': null,
    'Cameron Meredith': null,
    'Zach Mettenberger': null,
    'Christine Michael': null,
    'Marken Michel': null,
    'Jaydon Mickens': null,
    'Trey Millard': null,
    'Braxton Miller': null,
    'Bruce Miller': null,
    'Kyle Miller': null,
    'Lamar Miller': null,
    'Michael Miller': null,
    'Zach Miller': null,
    'Carlton Mitchell': null,
    'Malcolm Mitchell': null,
    'Dy\'Shawn Mobley': null,
    'Tony Moeaki': null,
    'Ifeanyi Momah': null,
    'Kevin Monangai': null,
    'Donte Moncrief': null,
    'Ty Montgomery': null,
    'Collin Mooney': null,
    'Chris Moore': null,
    'Denarius Moore': null,
    'Kashif Moore': null,
    'Kellen Moore': null,
    'Lance Moore': null,
    'Marlon Moore': null,
    'Matt Moore': null,
    'Tracy Moore': null,
    'David Morgan': null,
    'Joseph Morgan': null,
    'Josh Morgan': null,
    'Marshall Morgan': null,
    'Alfred Morris': null,
    'Romar Morris': null,
    'Stephen Morris': null,
    'Raheem Mostert': null,
    'Richard Mullaney': null,
    'Matthew Mulligan': null,
    'Keith Mumphery': null,
    'Jimmay Mundine': null,
    'Jake Murphy': null,
    'Louis Murphy': null,
    'Marcus Murphy': null,
    'Tyler Murphy': null,
    'Will Murphy': null,
    'Aaron Murray': null,
    'DeMarco Murray': null,
    'Latavius Murray': null,
    'Patrick Murray': null,
    'Brandon Myers': null,
    'Jason Myers': null,
    'Ryan Nassib': null,
    'Durron Neal': null,
    'Griffin Neal': null,
    'Rajion Neal': null,
    'Connor Neighbors': null,
    'David Nelson': null,
    'J.J. Nelson': null,
    'Jordy Nelson': null,
    'Cam Newton': null,
    'Hakeem Nicks': null,
    'Troy Niklas': null,
    'Roosevelt Nix-Jones': null,
    'Dwayne Norman': null,
    'Anthony Norris': null,
    'Marquez North': null,
    'Jordan Norwood': null,
    'Kevin Norwood': null,
    'Levi Norwood': null,
    'Nick Novak': null,
    'Mike Nugent': null,
    'Uzoma Nwachukwu': null,
    'Nick O\'Leary': null,
    'Ryan O\'Malley': null,
    'Cedric O\'Neal': null,
    'James O\'Shaughnessy': null,
    'Tom Obarski': null,
    'Jaden Oberkrom': null,
    'Chris Ogbonnaya': null,
    'Kevin Ogletree': null,
    'Franky Okafor': null,
    'Jamize Olawale': null,
    'Branden Oliver': null,
    'Greg Olsen': null,
    'Andrew Opoku': null,
    'Toben Opurum': null,
    'Dan Orlovsky': null,
    'Brock Osweiler': null,
    'Chris Owusu': null,
    'Curtis Painter': null,
    'Carson Palmer': null,
    'Nathan Palmer': null,
    'Tobais Palmer': null,
    'Chris Pantale': null,
    'Brian Parker': null,
    'DeVante Parker': null,
    'Preston Parker': null,
    'Cody Parkey': null,
    'Dennis Parks': null,
    'Jalen Parmele': null,
    'Bear Pascoe': null,
    'Cordarrelle Patterson': null,
    'Quinton Patton': null,
    'Solomon Patton': null,
    'Niles Paul': null,
    'Logan Paulsen': null,
    'David Paulson': null,
    'Jordan Payton': null,
    'Andrew Peacock': null,
    'Isaiah Pead': null,
    'Charone Peake': null,
    'Cedric Peerman': null,
    'Elijhaa Penny': null,
    'Justin Perillo': null,
    'Josh Perkins': null,
    'LaDarius Perkins': null,
    'Paul Perkins': null,
    'Breshad Perriman': null,
    'Senorise Perry': null,
    'John Peters': null,
    'Adrian Peterson': null,
    'Darrin Peterson': null,
    'Brandon Pettigrew': null,
    'Austin Pettis': null,
    'Bryce Petty': null,
    'Jake Phillips': null,
    'John Phillips': null,
    'Shakim Phillips': null,
    'Bernard Pierce': null,
    'Casey Pierce': null,
    'Larry Pinkard': null,
    'Dennis Pitta': null,
    'Chris Polk': null,
    'Christian Ponder': null,
    'Troymaine Pope': null,
    'DeVier Posey': null,
    'Darius Powe': null,
    'Bilal Powell': null,
    'Christian Powell': null,
    'Damond Powell': null,
    'Walt Powell': null,
    'Kyle Prater': null,
    'Matt Prater': null,
    'Quron Pratt': null,
    'Dak Prescott': null,
    'De\'Andre Presley': null,
    'Jhurrell Pressley': null,
    'Michael Preston': null,
    'Chase Price': null,
    'Jay Prosch': null,
    'C.J. Prosise': null,
    'MyCole Pruitt': null,
    'Terrelle Pryor': null,
    'Andrew Quarless': null,
    'Brian Quick': null,
    'Richard Quinn': null,
    'Bobby Rainey': null,
    'Devon Ramsay': null,
    'Joseph Randle': null,
    'Rueben Randle': null,
    'Will Ratelle': null,
    'Thomas Rawls': null,
    'Kalif Raymond': null,
    'Darrin Reaves': null,
    'DeAndre Reaves': null,
    'Silas Redd': null,
    'Marcel Reece': null,
    'Jordan Reed': null,
    'Bernard Reedy': null,
    'Josh Reese': null,
    'Tevin Reese': null,
    'David Reeves': null,
    'David Reeves': null,
    'Allen Reisner': null,
    'Blake Renaud': null,
    'Sean Renfree': null,
    'Bryn Renner': null,
    'Konrad Reuland': null,
    'Chase Reynolds': null,
    'Keenan Reynolds': null,
    'Jalen Richard': null,
    'David Richards': null,
    'Daryl Richardson': null,
    'Paul Richardson': null,
    'Rico Richardson': null,
    'Trent Richardson': null,
    'Theo Riddick': null,
    'Stevan Ridley': null,
    'Aaron Ripkowski': null,
    'Mychal Rivera': null,
    'Philip Rivers': null,
    'Andre Roberts': null,
    'Ben Roberts': null,
    'Jared Roberts': null,
    'Seth Roberts': null,
    'Adrien Robinson': null,
    'Aldrick Robinson': null,
    'Allen Robinson': null,
    'Demarcus Robinson': null,
    'Denard Robinson': null,
    'Devonte Robinson': null,
    'Gerell Robinson': null,
    'Jamal Robinson': null,
    'Josh Robinson': null,
    'Khiry Robinson': null,
    'Aaron Rodgers': null,
    'Jacquizz Rodgers': null,
    'Richard Rodgers': null,
    'Evan Rodriguez': null,
    'Ben Roethlisberger': null,
    'Chester Rogers': null,
    'Da\'Rick Rogers': null,
    'Eli Rogers': null,
    'Eric Rogers': null,
    'Jay Rome': null,
    'Tony Romo': null,
    'Dante Rosario': null,
    'Aldrick Rosas': null,
    'Nick Rose': null,
    'Brandon Ross': null,
    'Jeremy Ross': null,
    'Rashad Ross': null,
    'Eddie Royal': null,
    'Evan Royster': null,
    'Jake Rudock': null,
    'Kyle Rudolph': null,
    'Jonathon Rumph': null,
    'Xavier Rush': null,
    'Alonzo Russell': null,
    'Matt Ryan': null,
    'Greg Salas': null,
    'Mark Sanchez': null,
    'Emmanuel Sanders': null,
    'Beau Sandland': null,
    'Bishop Sankey': null,
    'Cairo Santos': null,
    'Mohamed Sanu': null,
    'Jalen Saunders': null,
    'Tom Savage': null,
    'Wes Saxton': null,
    'Matt Schaub': null,
    'Steven Scheu': null,
    'Ross Scheuerman': null,
    'Adam Schiltz': null,
    'Josh Scobee': null,
    'Rashawn Scott': null,
    'Lache Seastrunk': null,
    'Austin Seferian-Jenkins': null,
    'Tim Semisch': null,
    'Canaan Severin': null,
    'Hunter Sharp': null,
    'Tajae Sharpe': null,
    'Connor Shaw': null,
    'Kenny Shaw': null,
    'Kory Sheets': null,
    'Russell Shepard': null,
    'Sterling Shepard': null,
    'Anthony Sherman': null,
    'Ronnie Shields': null,
    'Jaxon Shipley': null,
    'Brandon Shippen': null,
    'Cecil Shorts': null,
    'Jameill Showers': null,
    'Valdez Showers': null,
    'Mickey Shuler': null,
    'Miles Shuler': null,
    'Trevor Siemian': null,
    'Jalen Simmons': null,
    'Matt Simms': null,
    'Rashaun Simonise': null,
    'Scott Simonson': null,
    'Jerome Simpson': null,
    'Blake Sims': null,
    'Charles Sims': null,
    'Dion Sims': null,
    'Phillip Sims': null,
    'Gannon Sinclair': null,
    'Terrell Sinkfield': null,
    'Patrick Skov': null,
    'Matthew Slater': null,
    'Tyler Slavin': null,
    'Kiero Small': null,
    'Wendell Smallwood': null,
    'Brad Smelley': null,
    'DeAndre Smelter': null,
    'Alex Smith': null,
    'Alex Smith': null,
    'Antone Smith': null,
    'Brad Smith': null,
    'Devin Smith': null,
    'Dreamius Smith': null,
    'Geno Smith': null,
    'Jeret Smith': null,
    'Jerome Smith': null,
    'Kevin Smith': null,
    'Lee Smith': null,
    'Michael Smith': null,
    'Rod Smith': null,
    'Rodney Smith': null,
    'Steve Smith': null,
    'Tevaun Smith': null,
    'Torrey Smith': null,
    'Willie Snead': null,
    'Isi Sofele': null,
    'Joe Sommers': null,
    'Brad Sorensen': null,
    'Ryan Spadola': null,
    'Matt Spaeth': null,
    'Harold Spears': null,
    'Evan Spencer': null,
    'C.J. Spiller': null,
    'Darren Sproles': null,
    'Nelson Spruce': null,
    'Alstevis Squirewell': null,
    'Zac Stacy': null,
    'Matthew Stafford': null,
    'Joshua Stangby': null,
    'Drew Stanton': null,
    'Ricky Stanzi': null,
    'James Starks': null,
    'Joel Stave': null,
    'Neal Sterling': null,
    'Craig Stevens': null,
    'Dez Stewart': null,
    'Jeremy Stewart': null,
    'Jonathan Stewart': null,
    'Josh Stewart': null,
    'Kenny Stills': null,
    'Cameron Stingily': null,
    'Luke Stocker': null,
    'Jake Stoneburner': null,
    'Jenson Stoshak': null,
    'Rod Streater': null,
    'Devin Street': null,
    'Tommy Streeter': null,
    'Jaelen Strong': null,
    'Caleb Sturgis': null,
    'Ryan Succop': null,
    'Nate Sudfeld': null,
    'Zach Sudfeld': null,
    'Shaun Suisham': null,
    'Phillip Supernaw': null,
    'Geoff Swaim': null,
    'Chris Swain': null,
    'Erik Swoope': null,
    'Will Ta\'ufo\'ou': null,
    'Jack Tabb': null,
    'Lorenzo Taliaferro': null,
    'Julian Talley': null,
    'Jacob Tamme': null,
    'Ryan Tannehill': null,
    'Andy Tanner': null,
    'Alex Tanney': null,
    'Brandon Tate': null,
    'Golden Tate': null,
    'Giorgio Tavecchio': null,
    'Jordan Taylor': null,
    'Kelvin Taylor': null,
    'LaVance Taylor': null,
    'Ryan Taylor': null,
    'Stepfan Taylor': null,
    'Tyrod Taylor': null,
    'Tim Tebow': null,
    'Randall Telfer': null,
    'Randall Telfer': null,
    'Adam Thielen': null,
    'Marcus Thigpen': null,
    'Daniel Thomas': null,
    'De\'Anthony Thomas': null,
    'Demaryius Thomas': null,
    'Julius Thomas': null,
    'Logan Thomas': null,
    'Michael Thomas': null,
    'Mike Thomas': null,
    'Pierre Thomas': null,
    'Kenbrell Thompkins': null,
    'Chris Thompson': null,
    'Deonte Thompson': null,
    'Dylan Thompson': null,
    'Jordan Thompson': null,
    'Juwan Thompson': null,
    'Kendal Thompson': null,
    'T.J. Thorpe': null,
    'D.J. Tialavea': null,
    'Zurlon Tipton': null,
    'Jordan Todman': null,
    'Levine Toilolo': null,
    'Mike Tolbert': null,
    'Scott Tolzien': null,
    'Eric Tomlinson': null,
    'Nick Toon': null,
    'Abou Toure': null,
    'Fitzgerald Toussaint': null,
    'Austin Trainor': null,
    'Ross Travis': null,
    'Austin Traylor': null,
    'Laquon Treadwell': null,
    'Bryce Treggs': null,
    'Justin Tucker': null,
    'Marcus Tucker': null,
    'Matthew Tucker': null,
    'Jeff Tuel': null,
    'Justin Tukes': null,
    'Will Tukuafu': null,
    'Robert Turbin': null,
    'Jarvis Turner': null,
    'Paul Turner': null,
    'Andrew Turzilli': null,
    'Taimi Tutogi': null,
    'Will Tye': null,
    'Brian Tyms': null,
    'Ify Umodu': null,
    'C.J. Uzomah': null,
    'Soma Vainuku': null,
    'Hakeem Valles': null,
    'Jason Vander Laan': null,
    'Nick Vannett': null,
    'Tyler Varga': null,
    'Dustin Vaughan': null,
    'Rahsaan Vaughn': null,
    'Shane Vereen': null,
    'Mike Vick': null,
    'Adam Vinatieri': null,
    'Dan Vitale': null,
    'Brian Vogler': null,
    'Clive Walford': null,
    'Delanie Walker': null,
    'Eric Wallace': null,
    'Mike Wallace': null,
    'Darren Waller': null,
    'Blair Walsh': null,
    'Bryan Walters': null,
    'Terron Ward': null,
    'Trabis Ward': null,
    'Spencer Ware': null,
    'Corey Washington': null,
    'DeAndre Washington': null,
    'Dwayne Washington': null,
    'L\'Damian Washington': null,
    'Nate Washington': null,
    'Tony Washington': null,
    'Herb Waters': null,
    'David Watford': null,
    'Sammy Watkins': null,
    'Benjamin Watson': null,
    'Terrell Watson': null,
    'Derek Watt': null,
    'Trey Watts': null,
    'Reggie Wayne': null,
    'Joe Webb': null,
    'Brandon Weeden': null,
    'Eric Weems': null,
    'Brandon Wegher': null,
    'Matt Weiser': null,
    'Wes Welker': null,
    'Keith Wenning': null,
    'Carson Wentz': null,
    'Charcandrick West': null,
    'Jarrod West': null,
    'Terrance West': null,
    'Tevin Westbrook': null,
    'Griff Whalen': null,
    'Ryan Whalen': null,
    'Markus Wheaton': null,
    'Darius White': null,
    'DeAndrew White': null,
    'James White': null,
    'Kevin White': null,
    'Myles White': null,
    'Roddy White': null,
    'Lucky Whitehead': null,
    'Charlie Whitehurst': null,
    'Nikita Whitlock': null,
    'Fozzy Whittaker': null,
    'Cole Wick': null,
    'James Wilder Jr.': null,
    'Brandon Wilds': null,
    'Matt Wile': null,
    'Andre Williams': null,
    'Arthur Williams': null,
    'Brandon Williams': null,
    'Bryce Williams': null,
    'D.J. Williams': null,
    'Dalyn Williams': null,
    'Damian Williams': null,
    'Damien Williams': null,
    'DeAngelo Williams': null,
    'Dom Williams': null,
    'Dominique Williams': null,
    'Duke Williams': null,
    'Ed Williams': null,
    'Fred Williams': null,
    'Jonathan Williams': null,
    'Jordan Williams': null,
    'Karlos Williams': null,
    'Kasen Williams': null,
    'Kerwynn Williams': null,
    'Kyle Williams': null,
    'Marquise Williams': null,
    'Maxx Williams': null,
    'Michael Williams': null,
    'Mike Williams': null,
    'Milton Williams': null,
    'Nick Williams': null,
    'Ryan Williams': null,
    'Ryan Williams': null,
    'Terrance Williams': null,
    'Terry Williams': null,
    'Trey Williams': null,
    'Tyrell Williams': null,
    'Wendall Williams': null,
    'Austin Willis': null,
    'Luke Willson': null,
    'Albert Wilson': null,
    'David Wilson': null,
    'De\'Runnya Wilson': null,
    'Evan Wilson': null,
    'Marquess Wilson': null,
    'Russell Wilson': null,
    'George Winn': null,
    'Glenn Winston': null,
    'Jameis Winston': null,
    'Max Wittek': null,
    'Jason Witten': null,
    'Cierre Wood': null,
    'Danny Woodhead': null,
    'Josh Woodrum': null,
    'Robert Woods': null,
    'Justin Worley': null,
    'Cam Worthy': null,
    'Chandler Worthy': null,
    'J.J. Worton': null,
    'James Wright': null,
    'Jarius Wright': null,
    'Kendall Wright': null,
    'Timothy Wright': null,
    'Devon Wylie': null,
    'Shane Wynn': null,
    'T.J. Yates': null,
    'T.J. Yeldon': null,
    'Darrel Young': null,
    'Kelsey Young': null,
    'Zach Zenner': null,
    'Michael Zordich': null,
    'Greg Zuerlein': null
  };
    $('input.autocomplete').autocomplete({
      data: data
    });
});
