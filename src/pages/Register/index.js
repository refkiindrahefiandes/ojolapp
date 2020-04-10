import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const sendData = () => {
    console.log('data yang dikirim : ', form);
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={25} height={25} />
        <View style={styles.illustartion} />
        <IllustrationRegister
          width={106}
          height={115}
          style={styles.illustartion}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="nama lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustartion: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};
