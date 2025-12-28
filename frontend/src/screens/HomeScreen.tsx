import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from 'src/context/AuthContext';
import { logout } from 'src/services/auth';

export default function Home() {
    const { logout } = useAuth();
    return (
        <View>
            <Text>Homescreen you are logged in 🎉</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: '#38a66fff',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 12,
    },
    logoutText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
    },
});
