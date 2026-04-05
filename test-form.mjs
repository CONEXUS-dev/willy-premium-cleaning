async function testForm() {
  const testData = {
    name: "Sway",
    phone: "8888888888",
    email: "test@test.com",
    service: "Deep Cleaning",
    message: "Test message"
  };

  try {
    console.log('Testing test-email API...');
    const testResponse = await fetch('https://willy-premium-cleaning.vercel.app/api/test-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('Test API Status:', testResponse.status);
    const testResult = await testResponse.json();
    console.log('Test API Response:', testResult);

    if (testResponse.ok) {
      console.log('Testing real email API...');
      const emailResponse = await fetch('https://willy-premium-cleaning.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      console.log('Email API Status:', emailResponse.status);
      const emailResult = await emailResponse.json();
      console.log('Email API Response:', emailResult);

      if (emailResult.success) {
        console.log('✅ SUCCESS! Email sent to Willy!');
      } else {
        console.log('❌ Email failed:', emailResult.error);
      }
    } else {
      console.log('❌ Test API failed:', testResult.error);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testForm();
