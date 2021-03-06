import numpy as np
import matplotlib as plt
import matplotlib.pyplot as pplt

data = [
  { 'x': 1.647225837031684, 'y': 1.7225748140494024 },
  { 'x': 7.994709719556726, 'y': 9.153878743209049 },
  { 'x': 5.629874335397239, 'y': 5.614926687270229 },
  { 'x': 2.0532630181027756, 'y': 2.3815988959983447 },
  { 'x': 0.4324048183599194, 'y': -0.41212679730659874 },
  { 'x': 2.700334584894338, 'y': 2.9817081193612442 },
  { 'x': 2.282826379380971, 'y': 0.9444128343002003 },
  { 'x': 8.52595816358429, 'y': 7.05951991119913 },
  { 'x': 2.471037801205248, 'y': 2.025040265369498 },
  { 'x': 8.129208298894085, 'y': 7.413038641878921 },
  { 'x': 7.735343173904212, 'y': 6.70571772868034 },
  { 'x': 9.136042981448378, 'y': 8.544011359359645 },
  { 'x': 7.964845094666623, 'y': 7.993000378589638 },
  { 'x': 9.4474505153411, 'y': 7.9637674259252496 },
  { 'x': 3.7176402815270384, 'y': 1.8097136325186045 },
  { 'x': 8.45216202371585, 'y': 7.407948364727707 },
  { 'x': 1.5605392406781315, 'y': 2.5535711975036857 },
  { 'x': 2.9743113737314406, 'y': 3.7723362308806796 },
  { 'x': 1.5245851781964548, 'y': 2.4927254713855542 },
  { 'x': 2.2025573408005905, 'y': 1.6871483956184488 },
  { 'x': 5.668193090003077, 'y': 6.310169127928189 },
  { 'x': 3.555276772291492, 'y': 5.215504453623666 },
  { 'x': 7.106849056087961, 'y': 6.214602705046491 },
  { 'x': 0.3212457501997912, 'y': 0.2721700142512225 },
  { 'x': 2.101661903232732, 'y': 3.763957337767099 },
  { 'x': 5.231534995600136, 'y': 5.761628105417096 },
  { 'x': 7.646022833232897, 'y': 9.130385695543342 },
  { 'x': 5.0591241204451585, 'y': 6.167452191842165 },
  { 'x': 3.5473619996824812, 'y': 3.373458857947084 },
  { 'x': 7.685662951180027, 'y': 7.072383575263341 },
  { 'x': 4.8138274815279765, 'y': 3.527702340419548 },
  { 'x': 4.982226017529813, 'y': 3.972631143477919 },
  { 'x': 4.60808853192376, 'y': 5.690845178193575 },
  { 'x': 4.643875934022205, 'y': 4.793747677149989 },
  { 'x': 4.943046987066988, 'y': 4.386966689290704 },
  { 'x': 5.72636590891971, 'y': 7.261508669289378 },
  { 'x': 7.756596231347074, 'y': 7.966196646256522 },
  { 'x': 1.8865734890510433, 'y': 2.3074026612531537 },
  { 'x': 6.398544394467065, 'y': 5.411381590983673 },
  { 'x': 6.669086018092943, 'y': 6.7348048479562195 },
  { 'x': 9.63386215205315, 'y': 10.130934160410543 },
  { 'x': 1.3020320697386323, 'y': 0.9558541694526967 },
  { 'x': 5.071772556898543, 'y': 5.360759889517214 },
  { 'x': 0.852687578258231, 'y': 1.9219497980158347 },
  { 'x': 6.577040379085269, 'y': 8.488102559627237 },
  { 'x': 2.669585874166842, 'y': 1.800720372348907 },
  { 'x': 9.907083223835038, 'y': 8.327290952932982 },
  { 'x': 0.3179522789956668, 'y': 0.3842571185270297 },
  { 'x': 4.982064372235739, 'y': 4.772270991619784 },
  { 'x': 2.721315308928877, 'y': 2.445387805285722 },
  { 'x': 8.067782980913956, 'y': 7.683765608763793 },
  { 'x': 4.278923957975435, 'y': 5.041861721456187 },
  { 'x': 0.8428259414339923, 'y': 1.3702875785196815 },
  { 'x': 9.332881872710487, 'y': 8.931106741356336 },
  { 'x': 2.7626160522417944, 'y': 1.838514016759072 },
  { 'x': 1.3250474471566298, 'y': 0.9460320448506965 },
  { 'x': 3.015442982945298, 'y': 1.539718978967531 },
  { 'x': 4.252422710337601, 'y': 2.2757873226534264 },
  { 'x': 6.010198480508643, 'y': 8.04105034049443 },
  { 'x': 0.722089180567338, 'y': -1.0291827392325381 },
  { 'x': 8.958836456365603, 'y': 9.892677537193308 },
  { 'x': 7.046009241854302, 'y': 7.329820485104018 },
  { 'x': 4.808828551067711, 'y': 4.462813717050082 },
  { 'x': 6.800501624819297, 'y': 7.056949357135877 },
  { 'x': 5.621039621674782, 'y': 4.904437744742896 },
  { 'x': 8.100778064260295, 'y': 9.692076129749243 },
  { 'x': 4.426457742562691, 'y': 5.2859633503561625 },
  { 'x': 0.1386777228396574, 'y': 1.1660197859378456 },
  { 'x': 7.533406101436193, 'y': 6.949884324462641 },
  { 'x': 9.515523348527978, 'y': 9.36175766115242 },
  { 'x': 1.6126458424963541, 'y': 1.7772467315123095 },
  { 'x': 8.546726826094822, 'y': 10.39144165377841 },
  { 'x': 0.886642054888297, 'y': 0.6955015828570847 },
  { 'x': 0.4454124741779364, 'y': 1.583189302056355 },
  { 'x': 7.780422956757805, 'y': 8.222282832762849 },
  { 'x': 7.875658797246436, 'y': 7.523519430734856 },
  { 'x': 5.922048528387607, 'y': 4.725340114357423 },
  { 'x': 5.373469764557814, 'y': 7.383723677656061 },
  { 'x': 1.0149468776914272, 'y': 1.3528642297474665 },
  { 'x': 0.16369417681381337, 'y': 0.9639491608022825 },
  { 'x': 6.657417020085761, 'y': 7.519053561453111 },
  { 'x': 8.973328030493294, 'y': 8.611412954651245 },
  { 'x': 6.802267167290483, 'y': 6.871081283627339 },
  { 'x': 8.981954886791662, 'y': 9.727853354837702 },
  { 'x': 4.404496300429225, 'y': 4.833847352362178 },
  { 'x': 4.356934782031257, 'y': 4.800514940775214 },
  { 'x': 9.509412824100515, 'y': 10.442193058045481 },
  { 'x': 9.058750322302338, 'y': 7.947982835609002 },
  { 'x': 9.87735151741668, 'y': 10.317313030459992 },
  { 'x': 5.695017800529252, 'y': 4.743421379798963 },
  { 'x': 1.0757934649570333, 'y': 2.437740630448488 },
  { 'x': 7.1177959399915816, 'y': 6.093261976555544 },
  { 'x': 8.357297025958978, 'y': 8.407666051874372 },
  { 'x': 6.89236245356425, 'y': 7.564690905927672 },
  { 'x': 3.9203394618254297, 'y': 2.5060785379731003 },
  { 'x': 0.3768099701623939, 'y': -0.18217597983341216 },
  { 'x': 2.859569971810604, 'y': 4.329749097899348 },
  { 'x': 9.270373455882945, 'y': 9.658009753464547 },
  { 'x': 7.641496941041545, 'y': 7.082163083253927 },
  { 'x': 4.923440907373431, 'y': 5.604821182878013 },
]

x = np.array(list(i['x'] for i in data))
y = np.array(list(i['x'] for i in data))
pplt.scatter(x, y)
pplt.show()