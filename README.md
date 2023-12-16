# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# react-useMemo-useCallback

## explanation

-Di React.js, useMemo dan useCallback adalah dua hook yang digunakan untuk mengoptimalkan performa komponen fungsional dengan memori nilai dan fungsi, masing-masing. Meskipun keduanya memiliki kesamaan, keduanya memiliki tujuan yang berbeda.

# useMemo

- useMemo digunakan untuk memori nilai yang dihitung dan mencegah perhitungan yang tidak perlu ulang. Ia menerima dua argumen: sebuah fungsi yang menghitung nilai, dan sebuah array dependensi. Nilai yang dikembalikan oleh fungsi tersebut akan di-memori dan hanya dihitung ulang jika ada perubahan pada salah satu dependensi. Berikut adalah contohnya:

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Pada contoh di atas, computeExpensiveValue hanya akan dipanggil lagi jika nilai a atau b berubah. Jika tidak, nilai yang di-memori memoizedValue akan dikembalikan, meningkatkan performa dalam situasi di mana perhitungan tersebut memakan banyak waktu.

- Di sisi lain, useCallback digunakan untuk memori sebuah fungsi agar tidak perlu dibuat ulang pada setiap render, terutama ketika melewatkan fungsi sebagai dependensi ke komponen anak. Ia juga menerima dua argumen: sebuah fungsi dan sebuah array dependensi. Fungsi yang di-memori hanya akan dibuat ulang jika ada perubahan pada salah satu dependensi. Berikut adalah contohnya:

```js
const memoizedCallback = useCallback(() => {
  // Logika fungsi
}, [dependensi]);
```

Pada contoh ini, fungsi memoizedCallback hanya akan dibuat ulang jika nilai dependensi berubah. Hal ini berguna dalam situasi di mana Anda ingin mencegah render ulang yang tidak perlu pada komponen anak yang bergantung pada referensi fungsi yang sama.

Secara ringkas, useMemo digunakan untuk memori nilai yang dihitung, sementara useCallback digunakan untuk memori sebuah fungsi. Keduanya membantu mengoptimalkan performa dengan menghindari perhitungan yang tidak perlu atau pembuatan ulang fungsi pada komponen React.

- secara singkat, useMemo adalah untuk value dan callBack unutk fungsi