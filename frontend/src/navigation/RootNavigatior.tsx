import { View, ActivityIndicator } from 'react-native';
import { useAuth } from 'src/context/AuthContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';


export default function RootNavigator() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}