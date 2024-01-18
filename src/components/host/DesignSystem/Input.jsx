export default function Input({placeholder, value}) {
    return (
        <div>
            <div style={{
                width : '100%',
                height : '100%',
                paddingLeft : 12,
                paddingRight : 12,
                paddingTop : 16,
                paddingBottom : 16,
                borderRadius : 8,
                border : '1px #B0B0B0 solid',
                flexDirection : 'column',
                justifyContent : 'flex-start',
                alignItems : 'flex-start',
                gap : 4,
                display : 'inline-flex'
            }}>
                <div style={{
                    justifyContent : 'flex-start',
                    alignItems : 'flex-start',
                    gap : 357,
                    display : 'inline-flex'
                }}>
                    <input style={{
                        color : '#717171',
                        fontSize : 16,
                        fontFamily : 'SF Pro',
                        fontWeight : '400',
                        wordWrap : 'break-word',
                    }}
                    placeholder={placeholder}
                    value={value}
                    />
                </div>
            </div>
        </div>
    );
}