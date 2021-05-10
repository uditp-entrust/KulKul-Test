/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  Image,
} from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';
import {Appbar} from 'react-native-paper';

const SECTIONS = [
  {
    title:
      'Finku telah terdaftar secara resmi dan diawasi oleh pemerintah Indonesia ',
    content: [
      {
        info: 'Finku terdaftar di bawah KOMINFO yang memiliki SOP & pengaturan keamanan data yang ketat',
      },
      {
        info: 'Finku sudah secara resmi terdaftar sebagai PT',
      },
      {
        info: 'Finku dikembangkan oleh tim dari Indonesia yang sudah mempelajari berbagai regulasi terkait keamanan data & privasi',
      },
    ],
  },
  {
    title: 'Finku sangat serius & berdedikasi dalam menjaga keamanan datamu',
    content: [
      {
        info: 'Finku memanfaatkan enkripsi canggih 256-AES, sama atau lebih tinggi dari rata-rata bank dan aplikasi Fintech di dunia',
      },
      {
        info: 'Finku hanya memiliki akses baca (tidak bisa mengubah dan membuat aktivitas), dan hanya membaca data saldo & transaksimu',
      },
      {
        info: 'Finku memfasilitasi apabila kamu ingin menghapus akunmu, dan datamu akan Finku hapus secara menyeluruh',
      },
    ],
  },
  {
    title: 'Ketentuan privasi',
    content: [
      {
        info: 'Finku tidak pernah dan tidak akan pernah menjual data apapun',
      },
      {
        info: 'Finku memantau bagaimana kamu berinteraksi dengan app Finku (contoh: fitur mana yang kamu pakai dan tidak) untuk keperluan evaluasi & meningkatkan kepuasan kamu',
      },
      {
        info: 'Finku tidak pernah dan tidak akan pernah memberikan datamu ke perusahaan manapun tanpa izin kamu',
      },
      {
        child: {
          info: 'Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.',
        },
      },
    ],
  },
];

const App = () => {
  const [currentItem, setCurrentItem] = useState([]);

  updateItem = index => {
    setCurrentItem(index);
  };

  _renderHeader = section => {
    return (
      <View
        style={{
          marginBottom: 10,
          backgroundColor: '#FFDBAC',
          borderRadius: 6,
          height: 50,
        }}>
        <Text style={{fontSize: 16, margin: 5, fontWeight: '600'}}>
          {section.title}
        </Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View>
        {section.content.map((val, ky) => (
          <View
            key={ky}
            style={{
              margin: 5,
              flexDirection: 'row',
              flex: 1,
            }}>
            <View style={{margin: 10}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('./src/img/imglogo.png')}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#7B7B7B'}}>
                {val.info}
              </Text>
            </View>
            {/* {val.child ?? (
               <View>
                 <Text>Child component</Text>
               </View>
             )} */}
          </View>
        ))}
      </View>
    );
  };

  _updateSections = index => setCurrentItem(index);

  return (
    <View style={{flex: 1}}>
      <Appbar.Header
        style={{height: 50, color: '#FFFFFF', backgroundColor: 'transparent'}}>
       <Appbar.BackAction onPress={()=>{}} />
        <Text style={{fontSize: 20}}>Tambah Akun Finansialmu</Text>
      </Appbar.Header>
      <ScrollView>
        <View style={{marginLeft: 16, marginRight: 16}}>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 50,
              marginBottom: 25,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 150,
                width: 193,
              }}
              source={require('./src/img/imglogo.png')}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 25,
            }}>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#7B7B7B'}}>
              Sebelum hubungkan akun finansialmu, baca dan pastikan 👇🏻
            </Text>
          </View>
          <Accordion
            sections={SECTIONS}
            activeSections={currentItem}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={updateItem}
          />
        </View>
      </ScrollView>
      <TouchableHighlight
        style={{
          height: 42,
          borderRadius: 5,
          backgroundColor: '#0C6DC7',
          marginLeft: 16,
          marginRight: 16,
          marginTop: 16,
          marginBottom: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            width: 203,
            height: 20,
            textAlign: 'center',
            fontSize: 18,
          }}>
          Tambah Akun Finansialmu
        </Text>
        {/* <Button
       title="Tambah Akun Finansialmu"
           full
           style={{
             // margin: 10,
             Color : "#0C6DC7",
           }}
         >
           {/* <Text>PROCEED TO CHECKOUT</Text> */}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    margin: 10,
    color: '#0C6DC7',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
