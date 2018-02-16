var map = L.map( $('#map > #container').get(0) ).setView([30, -10], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    minZoom: 2,
    maxZoom: 18
}).addTo(map);

L.Icon.Default.imagePath = "/js/images/";

var installations = [
    {
        latitude: '37.333333',
        longitude: '-121.9',
        title: 'The Tech Museum',
        place: 'San Jose, California',
    },
    {
        latitude: '38.904722',
        longitude: '-77.016389',
        title: 'National Air and Space Museum',
        place: 'Washington, D.C.',
    },
    {
        latitude: '43.733333',
        longitude: '7.416667',
        title: 'Oceanographic Museum',
        place: 'Monaco',
    },
    {
        latitude: '42.281389',
        longitude: '-83.748333',
        title: 'Ann Arbor Hands-On Museum',
        place: 'Ann Arbor, Michigan',
    },
    {
      latitude: '-33.768397',
      longitude: '150.729031',
      title: 'Western Sydney University',
      place: 'Sydney, NSW, Australia',
    },
    {
        latitude: '37.389444',
        longitude: '-122.081944',
        title: 'Computer History Museum',
        place: 'Mountain View, California',
    },
    {
        latitude: '37.507159',
        longitude: '-122.260522',
        title: 'Hiller Museum of Aviation',
        place: 'San Carlos, California',
    },
    {
        latitude: '51.507222',
        longitude: '-0.1275',
        title: 'London Museum of Natural History (Coral Reefs)',
        place: 'London, England',
    },
    {
        latitude: '36.971944',
        longitude: '-122.026389',
        title: 'NOAA Monterey Bay National Marine Sanctuary',
        place: 'Santa Cruz, California',
    },
    {
        latitude: '38.904722',
        longitude: '-77.016389',
        title: 'Smithsonian Air and Space Museum',
        place: 'Washington, D.C.',
    },
    {
        latitude: '32.300767',
        longitude: '-64.796263',
        title: 'Bermuda Underwater Exploration Institute',
        place: 'Pembroke, Bermuda',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'Pavillon de l’Arsenal',
        place: 'Paris, France',
    },
    {
        latitude: '34.05',
        longitude: '-118.25',
        title: 'Los Angeles Auto Show',
        place: 'Los Angeles, California',
    },
    {
        latitude: '-6.2',
        longitude: '106.816667',
        title: '@america',
        place: 'Jakarta, Indonesia',
    },
    {
        latitude: '21.311389',
        longitude: '-157.796389',
        title: 'APEC Summit',
        place: 'Hawaii',
    },
    {
        latitude: '32.715',
        longitude: '-117.1625',
        title: 'Distributech',
        place: 'San Diego, California',
    },
    {
        latitude: '1.3',
        longitude: '103.8',
        title: 'World Oceans Summit',
        place: 'Singapore',
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'Google Creative Sandbox',
        place: 'New York City',
    },
    {
        latitude: '37.783333',
        longitude: '-122.416667',
        title: 'Google Creative Sandbox',
        place: 'San Francisco, California',
    },
    {
        latitude: '20.566667',
        longitude: '-103.683333',
        title: 'Comisión Nacional Forestal',
        place: 'Jalisco, Mexico',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'Exhibit at the Grand Palais',
        place: 'Paris, France',
    },
    {
        latitude: '38.904722',
        longitude: '-77.016389',
        title: 'Newseum',
        place: 'Washington, D.C.',
    },
    {
        latitude: '43.7',
        longitude: '-79.4',
        title: 'Sibos',
        place: 'Toronto, Canada',
    },
    {
        latitude: '21.160556',
        longitude: '-86.8475',
        title: 'COP16',
        place: 'Cancún, Mexico',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'COP21',
        place: 'Paris, France',
    },
    {
        latitude: '32.715',
        longitude: '-117.1625',
        title: 'Internet Retailer',
        place: 'San Diego, California',
    },
    {
        latitude: '27.968056',
        longitude: '-82.476389',
        title: 'LandWarNet',
        place: 'Tampa, Florida',
    },
    {
        latitude: '52.375892',
        longitude: '9.732010',
        title: 'TUI group',
        place: 'Hannover, Germany',
    },
    {
        latitude: '51.507222',
        longitude: '-0.1275',
        title: 'Catlin Group',
        place: 'London, England',
    },
    {
        latitude: '36.6',
        longitude: '-121.9',
        title: 'Blue Ocean Film Festival',
        place: 'Monterey, California',
    },
    {
        latitude: '-22.908333',
        longitude: '-43.196389',
        title: 'Rio+20',
        place: 'Rio de Janeiro, Brazil',
    },
    {
        latitude: '34.070270',
        longitude: '134.554844',
        title: 'Asutamu Land',
        place: 'Tokushima, Japan',
    },
    {
        latitude: '51.507351',
        longitude: '-0.127758',
        title: 'Barclays Bank',
        place: 'London, England',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'LeWeb 2014',
        place: 'Paris, France',
    },
    {
        latitude: '38.933868',
        longitude: '-77.177260',
        title: 'Hilton Worldwide Headquarters',
        place: 'McLean, Virginia',
    },
    {
        latitude: '32.776475',
        longitude: '-79.931051',
        title: 'Benefitfocus',
        place: 'Charleston, South Carolina',
    },
    {
        latitude: '37.566535',
        longitude: '126.977969',
        title: 'AZero Offices',
        place: 'Seoul, Korea',
    },
    {
        latitude: '37.389444',
        longitude: '-122.081944',
        title: 'Earth Engine Summit',
        place: 'Mountain View, California',
    },
    {
        latitude: '35.016060',
        longitude: '126.710757',
        title: 'KEPCO Visitor Center',
        place: 'Nanju, Korea',
    },
    {
        latitude: '30.267153',
        longitude: '-97.743061',
        title: 'Google.org SXSW',
        place: 'Austin, Texas',
    },
    {
        latitude: '41.878114',
        longitude: '-87.629798',
        title: 'AAG Conference',
        place: 'Chicago, Illinois',
    },
    {
        latitude: '41.878114',
        longitude: '-87.629798',
        title: 'Hilton Executive Conference',
        place: 'Chicago, Illinois',
    },
    {
        latitude: '28.538335',
        longitude: '-81.379236',
        title: 'Hilton Owners Conference',
        place: 'Orlando, Florida',
    },
    {
        latitude: '50.850340',
        longitude: '4.351710',
        title: 'BOZAR',
        place: 'Brussels, Belgium',
    },
    {
        latitude: '33.770050',
        longitude: '-118.193739',
        title: 'Aquarium of the Pacific',
        place: 'Long Beach, California',
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'Internet Week',
        place: 'New York City',
    },
    {
        latitude: '34.05',
        longitude: '-118.25',
        title: 'GTI',
        place: 'Los Angeles, California',
    },
    {
        latitude: '36.548434',
        longitude: '-82.561819',
        title: 'Eastman Chemical',
        place: 'Kingsport, Tennessee',
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'Think Publishing',
        place: 'New York City',
    },
    {
        latitude: '37.463552',
        longitude: '-122.428586',
        title: 'Economist Summit',
        place: 'Half Moon Bay, California',
    },
    {
        latitude: '37.566535',
        longitude: '126.977969',
        title: 'Hyundai Travel Library',
        place: 'Seoul, Korea',
    },
    {
        latitude: '50.110922',
        longitude: '8.682127',
        title: 'Lufthansa A380 event',
        place: 'Frankfurt, Germany',
    },
    {
        latitude: '45.440847',
        longitude: '12.315515',
        title: 'Venice Biennale',
        place: 'Venice, Italy',
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'New York Tech Meetup',
        place: 'New York City',
    },
    {
        latitude: '-34.603684',
        longitude: '-58.381559',
        title: 'Tecnopolis',
        place: 'Buenos Aires, Argentina',
    },
    {
        latitude: '-23.550520',
        longitude: '-46.633309',
        title: 'MundoGEO',
        place: 'São Paulo, Brazil',
    },
    {
        latitude: '42.125093',
        longitude: '-72.749538',
        title: 'Westfield University',
        place: 'Westfield, Massachusetts',
    },
    {
        latitude: '34.408116',
        longitude: '131.399085',
        title: 'UNESCO World Heritage',
        place: 'Hagi, Japan',
    },
    {
        latitude: '34.05',
        longitude: '-118.25',
        title: 'LA Street Art Show',
        place: 'Los Angeles, California',
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'Made with Code',
        place: 'New York City',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'Palais de Tokyo',
        place: 'Paris, France',
    },
    {
        latitude: '35.913200',
        longitude: '-79.055845',
        title: 'UNC Chapel Hill',
        place: 'Chapel Hill, North Carolina',
    },
    {
        latitude: '38.971669',
        longitude: '-95.235250',
        title: 'University of Kansas',
        place: 'Lawrence, Kansas',
    },
    {
        latitude: '39.739236',
        longitude: '-104.990251',
        title: 'Prologis',
        place: 'Denver, Colorado',
    },
    {
        latitude: '37.783333',
        longitude: '-122.416667',
        title: 'Prologis',
        place: 'San Francisco, California',
    },
    {
        latitude: '56.262051',
        longitude: '-3.725752',
        title: 'Ryder Cup',
        place: 'Gleneagles, Scotland',
    },
    {
        latitude: '-23.550520',
        longitude: '-46.633309',
        title: 'Smart Cities',
        place: 'São Paulo, Brazil',
    },
    {
        latitude: '-23.550520',
        longitude: '-46.633309',
        title: 'ProXXIma 2014',
        place: 'São Paulo, Brazil',
    },
    {
        latitude: '46.878718',
        longitude: '-113.996586',
        title: 'University of Montana',
        place: 'Missoula, Montana',
    },
    {
        latitude: '37.783333',
        longitude: '-122.416667',
        title: 'Social Innovations Conference',
        place: 'San Francisco, California',
    },
    {
        latitude: '-33.867487',
        longitude: '151.206990',
        title: 'World Parks Congress',
        place: 'Sydney, Australia',
    },
    {
        latitude: '33.366667',
        longitude: '126.533333',
        title: 'IUCN World Conservation Congress',
        place: 'Jeju Island, Korea',
    },
    {
        latitude: '50.110922',
        longitude: '8.682127',
        title: 'Deutsche Bank Executive Committee',
        place: 'Frankfurt, Germany',
    },
    {
        latitude: '48.8567',
        longitude: '2.3508',
        title: 'NCoIH at UNESCO Headquarters',
        place: 'Paris, France',
    },
    {
        latitude: '37.783333',
        longitude: '-122.416667',
        title: 'American Geophysical Union',
        place: 'San Francisco, California',
    },
    {
        latitude: '30.267153',
        longitude: '-97.743061',
        title: 'Texas Department of Information Resources',
        place: 'Austin, Texas',
    },
    {
        latitude: '51.227741',
        longitude: '6.773456',
        title: 'FORUM 2014 „Doppelschicht“ #Werkstatt: Kundendialog im Multikanal',
        place: 'Düsseldorf, Germany',
    },
    {
        latitude: '41.616667',
        longitude: '0.633333',
        title: 'Lleida University',
        place: 'Lleida, Spain',
    },
    {
        latitude: '52.516667',
        longitude: '13.383333',
        title: 'Google',
        place: 'Berlin, Germany'
    },
    {
        latitude: '40.014986',
        longitude: '-105.270546',
        title: 'Google',
        place: 'Boulder, Colorado'
    },
    {
        latitude: '50.850340',
        longitude: '4.351710',
        title: 'Google',
        place: 'Brussels, Belgium'
    },
    {
        latitude: '53.349805',
        longitude: '-6.260310',
        title: 'Google',
        place: 'Dublin, Ireland'
    },
    {
        latitude: '53.551085',
        longitude: '9.993682',
        title: 'Google',
        place: 'Hamburg, Germany'
    },
    {
        latitude: '34.05',
        longitude: '-118.25',
        title: 'Google',
        place: 'Los Angeles, California'
    },
    {
        latitude: '19.432608',
        longitude: '-99.133208',
        title: 'Google',
        place: 'Mexico City, Mexico'
    },
    {
        latitude: '55.755826',
        longitude: '37.617300',
        title: 'Google',
        place: 'Moscow, Russia'
    },
    {
        latitude: '37.389444',
        longitude: '-122.081944',
        title: 'Google',
        place: 'Mountain View, California'
    },
    {
        latitude: '40.7127',
        longitude: '-74.0059',
        title: 'Google',
        place: 'New York City'
    },
    {
        latitude: '32.085300',
        longitude: '34.781768',
        title: 'Google',
        place: 'Tel Aviv, Israel'
    },
    {
        latitude: '35.709026',
        longitude: '139.731992',
        title: 'Google',
        place: 'Tokyo, Japan'
    },
    {
        latitude: '43.653226',
        longitude: '-79.383184',
        title: 'Google',
        place: 'Toronto, Canada'
    },
    {
        latitude: '38.904722',
        longitude: '-77.016389',
        title: 'Google',
        place: 'Washington, D.C.'
    },
    {
        latitude: '47.376887',
        longitude: '8.541694',
        title: 'Google',
        place: 'Zürich, Switzerland'
    }
];

var locations = _.groupBy(installations, 'place');

console.log(locations);

var markers = _.map(locations, function(members, title) {
    return {
        title: title,
        latitude: members[0].latitude,
        longitude: members[0].longitude,
        installations: members
    }
});

_.each(markers, function(i, j) {
    if (i.latitude && i.longitude) {
        var marker = L.marker([i.latitude, i.longitude], { title: i.title }).addTo(map);

        var installations = i.installations.sort(function (a, b) {
            var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        content = '';

        _.each(installations, function(i, j) {
            content += i.title + '<br/>'
        });

        marker.on('click', function(e) {
            map.panTo(marker.getLatLng());
        });

        marker.bindPopup(content + '<p><b>' + i.installations[0].place + '</b></p>');
    }
});
