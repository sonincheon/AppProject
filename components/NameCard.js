import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';

const NameCardPrn = ({nameCard}) => {
  return (
    <View style={styles.nameCard}>
      <Text style={styles.heading}>명함 정보 출력</Text>
      <Text>이름 : {nameCard.name}</Text>
      <Text>직책 : {nameCard.position}</Text>
      <Text>회사 : {nameCard.company}</Text>
      <Text>주소 : {nameCard.addr}</Text>
      <Text>메일 : {nameCard.email}</Text>
      <Text>전화 : {nameCard.phone}</Text>
    </View>
  );
};

const NameCard = () => {
  const [nameCard, setNameCard] = useState({
    name: '',
    position: '',
    company: '',
    addr: '',
    email: '',
    phone: '',
  });
  const [submit, setSubmit] = useState(false);

  const onChange = (key, value) => {
		// 계산된 속성명은 ES6에서 추가되었으며 []안에 표현식을 넣으면 됩니다.
    setNameCard({...nameCard, [key]: value});
  };

  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>명함 정보 입력</Text>
      <TextInput
        style={styles.input}
        placeholder="이름 입력"
        value={nameCard.name}
        onChangeText={text => onChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="직책 입력"
        value={nameCard.position}
        onChangeText={text => onChange('position', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="회사 입력"
        value={nameCard.company}
        onChangeText={text => onChange('company', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="주소 입력"
        value={nameCard.addr}
        onChangeText={text => onChange('addr', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="메일 입력"
        value={nameCard.email}
        onChangeText={text => onChange('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="폰 입력"
        value={nameCard.phone}
        onChangeText={text => onChange('phone', text)}
      />
      <CustomButton title="제출" color="red" onPress={onSubmit} />
      {submit && <NameCardPrn nameCard={nameCard} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  nameCard: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
  },
});

export default NameCard;