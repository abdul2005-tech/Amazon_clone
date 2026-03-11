import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Account.module.css';

const INITIAL_USER = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 15, 2024'
};

const INITIAL_ADDRESS = {
    street: '123 Amazon Lane',
    city: 'Seattle',
    state: 'WA',
    zip: '98109',
    country: 'USA'
};

const MOCK_ORDERS = [
    { id: '112-3456789-1234567', date: 'Feb 9, 2026', total: '$45.99', status: 'Delivered' },
    { id: '112-9876543-7654321', date: 'Jan 28, 2026', total: '$129.50', status: 'Shipped' },
    { id: '111-5555555-4444444', date: 'Dec 15, 2025', total: '$12.99', status: 'Delivered' }
];

const Account = () => {
    const navigate = useNavigate();

    // State for editable data
    const [user, setUser] = useState(INITIAL_USER);
    const [address, setAddress] = useState(INITIAL_ADDRESS);

    // Toggle states
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    // Temporary state for form inputs
    const [tempUser, setTempUser] = useState(INITIAL_USER);
    const [tempAddress, setTempAddress] = useState(INITIAL_ADDRESS);

    // Handlers for Profile
    const handleEditProfile = () => {
        setTempUser(user);
        setIsEditingProfile(true);
    };

    const handleSaveProfile = () => {
        setUser(tempUser);
        setIsEditingProfile(false);
    };

    const handleCancelProfile = () => {
        setIsEditingProfile(false);
    };

    // Handlers for Address
    const handleEditAddress = () => {
        setTempAddress(address);
        setIsEditingAddress(true);
    };

    const handleSaveAddress = () => {
        setAddress(tempAddress);
        setIsEditingAddress(false);
    };

    const handleCancelAddress = () => {
        setIsEditingAddress(false);
    };

    // Handler for Logout
    const handleLogout = () => {
        // In a real app, clear auth tokens here
        navigate('/signin');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Your Account</h1>
            </header>

            <div className={styles.dashboardGrid}>
                {/* User Info Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>Login & Security</h2>
                        {!isEditingProfile && (
                            <button className={styles.editBtn} onClick={handleEditProfile}>Edit</button>
                        )}
                    </div>

                    {isEditingProfile ? (
                        <div className={styles.editForm}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Name:</label>
                                <input
                                    type="text"
                                    value={tempUser.name}
                                    onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email:</label>
                                <input
                                    type="email"
                                    value={tempUser.email}
                                    onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.buttonGroup}>
                                <button className={styles.actionBtn} onClick={handleSaveProfile}>Save</button>
                                <button className={styles.editBtn} onClick={handleCancelProfile}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className={styles.infoRow}>
                                <span className={styles.label}>Name:</span>
                                <span className={styles.value}>{user.name}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.label}>Email:</span>
                                <span className={styles.value}>{user.email}</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.label}>Member Since:</span>
                                <span className={styles.value}>{user.joinDate}</span>
                            </div>
                            <button className={styles.actionBtn}>Change Password</button>
                        </>
                    )}
                </div>

                {/* Address Card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2 className={styles.cardTitle}>Your Addresses</h2>
                        {!isEditingAddress && (
                            <button className={styles.editBtn} onClick={handleEditAddress}>Edit</button>
                        )}
                    </div>

                    {isEditingAddress ? (
                        <div className={styles.editForm}>
                            <input
                                placeholder="Street"
                                value={tempAddress.street}
                                onChange={(e) => setTempAddress({ ...tempAddress, street: e.target.value })}
                                className={styles.inputField}
                                style={{ marginBottom: '5px', width: '100%' }}
                            />
                            <input
                                placeholder="City"
                                value={tempAddress.city}
                                onChange={(e) => setTempAddress({ ...tempAddress, city: e.target.value })}
                                className={styles.inputField}
                                style={{ marginBottom: '5px', width: '100%' }}
                            />
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <input
                                    placeholder="State"
                                    value={tempAddress.state}
                                    onChange={(e) => setTempAddress({ ...tempAddress, state: e.target.value })}
                                    className={styles.inputField}
                                    style={{ flex: 1 }}
                                />
                                <input
                                    placeholder="Zip"
                                    value={tempAddress.zip}
                                    onChange={(e) => setTempAddress({ ...tempAddress, zip: e.target.value })}
                                    className={styles.inputField}
                                    style={{ flex: 1 }}
                                />
                            </div>
                            <input
                                placeholder="Country"
                                value={tempAddress.country}
                                onChange={(e) => setTempAddress({ ...tempAddress, country: e.target.value })}
                                className={styles.inputField}
                                style={{ marginTop: '5px', marginBottom: '10px', width: '100%' }}
                            />
                            <div className={styles.buttonGroup}>
                                <button className={styles.actionBtn} onClick={handleSaveAddress}>Save</button>
                                <button className={styles.editBtn} onClick={handleCancelAddress}>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <address className={styles.addressBox}>
                            <strong>Default Address:</strong><br />
                            {user.name}<br />
                            {address.street}<br />
                            {address.city}, {address.state} {address.zip}<br />
                            {address.country}
                        </address>
                    )}

                    {!isEditingAddress && (
                        <div style={{ marginTop: '15px' }}>
                            <button className={styles.actionBtn}>Add New Address</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Orders Section */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>Your Orders</h2>
                    <button className={styles.editBtn}>View All</button>
                </div>

                {MOCK_ORDERS.map(order => (
                    <div key={order.id} className={styles.orderItem}>
                        <div className={styles.orderHeader}>
                            <span>ORDER PLACED <br /> {order.date}</span>
                            <span>TOTAL <br /> {order.total}</span>
                            <span>ORDER # {order.id}</span>
                        </div>
                        <div className={styles.orderBody}>
                            <div>
                                <span className={styles.orderStatus}>{order.status}</span>
                                <p>Arriving tomorrow by 10 PM</p>
                            </div>
                            <div>
                                <button className={styles.actionBtn}>Track Package</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                    className={[styles.actionBtn, styles.logoutBtn].join(' ')}
                    style={{ width: '200px', margin: '0 auto' }}
                    onClick={handleLogout}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Account;
