import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth'; // Firebase Auth
import { doc, getDoc } from 'firebase/firestore'; // Firestore functions
import { db } from './../../configs/FirebaseConfig'; // Your Firestore configuration
import { router } from 'expo-router';

const ProfileView = () => {
  const [fullName, setFullName] = useState(''); // State to store user's name
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Fetch the user's document from Firestore
          const userDocRef = doc(db, 'users', user.uid); // Reference to Firestore document using UID
          const userDoc = await getDoc(userDocRef); // Fetch document

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFullName(userData.fullName || 'No Name Available'); // Set full name
          } else {
            console.log('No such user document!');
            setFullName('User');
          }
        } else {
          console.log('No authenticated user');
          setFullName('Guest');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setFullName('Error fetching name');
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Add your logout logic here
    router.push('auth/sign-in');
  };

  if (loading) {
    return <Text>Loading...</Text>; // Show loading state
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{ uri: 'https://www.bootdey.com/image/280x280/1E90FF/1E90FF' }}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
          />
          {/* Ensure fullName is always a string */}
          <Text style={styles.nameText}>{fullName ? fullName : 'No Name Available'}</Text> 
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ullamcorper nisi.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
  },
  coverPhoto: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
};

export default ProfileView;
