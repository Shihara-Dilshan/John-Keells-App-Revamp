import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppColors from '../../config/colors';
import {AppAuthContext} from '../../contexts/app/AppAuthContext';

const ContinueToHome = ({navigation}) => {
  const [AppAuthState, setAppAuthState] = useContext(AppAuthContext);
  const navigateToNextPage = () => {
    setAppAuthState({isLoggedIn: true});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You're All Set!</Text>
      <Image
        style={styles.image}
        source={require('../../assets/images/allSet.png')}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={navigateToNextPage}
          style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContinueToHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 36,
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
    marginTop: 10,
  },
  nextBtn: {
    flex: 1,
    backgroundColor: AppColors.primaryGreen,
    color: AppColors.white,
    borderRadius: 5,
    justifyContent: 'center',
    padding: 12,
    elevation: 2,
  },
  nextBtnText: {
    color: AppColors.white,
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
