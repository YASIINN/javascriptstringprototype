Bu Örnek Çekino İçin Hazırlanmıştır

## Javascript String Interpolation

**Yapabildikleri**

~~~~
String İçine Yazılan Kıvırcık Parentezlerin İçindeki Javascript İşlemlerinin Yapılması
~~~~

**Örnek Kullanım **
~~~~
    let example1 = 'Ad: {{ name }}  Soyad: {{ surname }}  
        Yaş {{age}}'.interpolation({
        name: 'Yasin',
        surname: 'Dalkılıç',
        age: "24"
    });
    let example2 = '<a href="{{ url }}"></a>'.interpolation({url: 'https://www.cekino.com/'});
    let example3 = 'İşlem: {{ s1 + s2 - s3 }}'.interpolation({s1: 10, s2: 3, s3: 2});
    let example4 = 'Toplam: {{ s1 }} + {{ s2 }} = {{ sum(s1, s2) }}'.interpolation({
        s1: 50,
        s2: 20,
        sum: (s1, s2) => s1 + s2
    });
  
~~~~

**Örnek Çıktı**
<img src="https://raw.githubusercontent.com/YASIINN/javascriptstringprototype/master/ornek.png" width="600">
**Kullanılan Araçlar**
~~~~
Javascript
~~~~

