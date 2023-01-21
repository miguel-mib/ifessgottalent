num = int(input('Primeiro número: '))
razao = int(input('Razão da PA: '))
numero = num
contador = 1

while contador <= 10:
  print(f'{numero} -> ', end='')
  numero += razao
  contador += 1
print('fim')